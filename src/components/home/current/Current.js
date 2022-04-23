
import { Container } from "../../styled-components/Container.styled"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CurrentFavBar } from "./CurrentFavBar";
import { CurrentDescription } from "./CurrentDescription";
import { CurrentWeather } from "./CurrentWeather";
import { CurrentForcast } from "./CurrentForcast";
import { getWeatherByCityKey, getWeatherByGeoLocation } from "../../../utils/weather-api-helper"
import { setCity } from "../../../redux/cityReducer";


const TEL_AVIV_CITY_KEY = "215854";

export const Current = () => {

    const currentCity = useSelector(state => state.city.value);
    const dispach = useDispatch();

    function setInitCityData() {
        if (0 === currentCity.key.length) {

            navigator.geolocation.getCurrentPosition(
                (success => {

                    console.log(success)
                    getWeatherByGeoLocation(success.coords.latitude, success.coords.longitude)
                        .then((response) => {
                            dispach(setCity(response))
                        }).catch((error) => {
                            console.log(error)
                        })

                }),
                (error) => {
                    getWeatherByCityKey(TEL_AVIV_CITY_KEY, "Tel Aviv")
                        .then((response) => {
                            dispach(setCity(response))
                        }).catch((error) => {
                            console.log(error)
                        })
                })

        }
    }



    useEffect(() => {
        setInitCityData()
    }, [])

    return (
        <Container>

            <CurrentFavBar />
            <CurrentWeather />
            <CurrentDescription  />
            <CurrentForcast/>

        </Container>
    );
} 