
import axios from "axios";
import { City } from "../components/models/city";
import {convertToCelsius} from "./helper"


const APIKEY = "OVcuj1xCrqy9SZU4uG2k4iMbhdMmVLPR";

export const getCityListByString = async (str) => {
    let response = {};
    let cityList = [];
    let cityArray = [];
    try {
        response = await axios.get(getAutoCompURL(str))
        console.log(response)
        cityArray = response.data;
        cityArray.forEach((item)=>{
            cityList.push({
                key: item.Key,
                city: item.LocalizedName,
                country: item.Country.LocalizedName,
                fullName: `${item.LocalizedName}, ${item.Country.LocalizedName}`
            })
        })
    } catch (error) {
        console.log(error)
    } finally {
        return cityList;
    }
}


export const getWeatherByGeoLocation = async (latitude, longitude) => {
    let city = new City();
    let response = {};
    try {
        response['geo'] = await axios.get(getGeoURL(latitude, longitude))
        response['current'] = await axios.get(getCurrentURL(response.geo.data.Key))
        response['forcast'] = await axios.get(getForcastURL(response.geo.data.Key));
        city = cityBuilder(response, response.geo.data.Key, response.geo.data.EnglishName)
    } catch (error) {
        console.log(error)
    } finally {
        return city;
    }
}


export const getWeatherByCityKey = async (city_key, city_name) => {
    let city = new City();
    let response = {}
    try {
        response['current'] = await axios.get(getCurrentURL(city_key))
        response['forcast'] = await axios.get(getForcastURL(city_key));
        city = cityBuilder(response, city_key, city_name)    
    } catch (error) {
        console.log(error)
    } finally {
        return city;
    }

}


const setForcastArr = (data) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let response = [];
    data.forEach((item)=>{
        let min = item.Temperature.Minimum.Value;
        let max = item.Temperature.Maximum.Value;
        response.push({
            dayName: days[new Date(item.Date).getDay()],
            metric: {
                min: convertToCelsius(min),
                max: convertToCelsius(max)
            },
            imperial: {
                min: min.toString(),
                max: max.toString()
            }
        })
    })
    return response;
}

const cityBuilder = (response, city_key, city_name) => {
    let city = new City();
    city.key = city_key
    city.name = city_name
    city.description = response.current.data[0].WeatherText
    city.metric = response.current.data[0].Temperature.Metric.Value.toString().substring(0,2)
    city.imperial = response.current.data[0].Temperature.Imperial.Value.toString().substring(0,2)
    city.forcast = setForcastArr(response.forcast.data.DailyForecasts);
    return city;
}

const getAutoCompURL = (str) => `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKEY}&q=${str}`;

const getCurrentURL = (city_key) => `http://dataservice.accuweather.com/currentconditions/v1/${city_key}?apikey=${APIKEY}`;

const getGeoURL = (latitude, longitude) => `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${APIKEY}&q=${latitude}%2C${longitude}`;

const getForcastURL = (city_key) => `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city_key}?apikey=${APIKEY}`;



