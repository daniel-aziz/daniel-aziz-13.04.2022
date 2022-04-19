
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
    const currentData = useSelector(state => state.city.value);
    const dispach = useDispatch();

    function setInitCityData() {
        // navi
        navigator.geolocation.getCurrentPosition(
            (success => {
                // get from api
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

    const onButton = () => {
        
    }

    useEffect(() => {
       // setInitCityData()
    }, [])

    return (
        <Container>

            <CurrentFavBar />
            <CurrentWeather name={currentData.name} metric={currentData.metric} />
            <CurrentDescription description={currentData.description} />
            <CurrentForcast forcast={currentData.forcast} />

            <button onClick={() => { onButton() }}>get info</button>
        </Container>
    );
} 