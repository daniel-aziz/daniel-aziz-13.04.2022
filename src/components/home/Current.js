
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { CurrentWeather } from "./CurrentWeather";
import { CurrentForcast } from "./CurrentForcast";
import { getWeatherByCityKey, getWeatherByGeoLocation } from "../../utils/weather-api-helper"
import { setCity } from "../../redux/cityReducer";
import notify from "../../utils/Notify";


export const Current = () => {
    const dispach = useDispatch();

    function setInitCityData() {
        let cityStorage = JSON.parse(localStorage.getItem("city"))
        if (cityStorage === undefined || cityStorage === null) {
            return
        };
        if (cityStorage?.key.length !== 0) {
            return
        };;

        navigator.geolocation.getCurrentPosition(
            (success => {
                getWeatherByGeoLocation(success.coords.latitude, success.coords.longitude)
                    .then((response) => {
                        dispach(setCity(response))
                        notify.success("Weather set by location")
                    }).catch((error) => {
                        notify.error("Error with fetching data from server")
                    })

            }),
            (error) => {
                getWeatherByCityKey("215854", "Tel Aviv")
                    .then((response) => {
                        dispach(setCity(response))
                    }).catch((error) => {
                        notify.error("Error with fetching data from server")
                    })
            })

    }



    useEffect(() => {
        setInitCityData()
    }, [])


    return (
        <section>
            <CurrentWeather />
            <CurrentForcast />
        </section>
    );
} 