import { useState } from "react";
import { getCityListByString, getWeatherByCityKey } from "../../../utils/weather-api-helper"
import { useDispatch } from "react-redux";
import { setCity } from "../../../redux/cityReducer";

export const SearchBar = () => {
    const [suggestions, setSuggestions] = useState([]);
    const dispach = useDispatch();

    const getSuggestions = (term) => {
        term = term.trim().trimRight();
        if (term !== "") {
            getCityListByString(term)
                .then((response) => {
                    setSuggestions(response)
                })
                .catch((error) => {

                })
        } else setSuggestions([])
    }

    const setWeather = (city_key, city_name) => {
        getWeatherByCityKey(city_key, city_name)
            .then((response) => {
                dispach(setCity(response))
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>

                <input
                    style={{
                        width: "225px",
                        margin: "0"
                    }}
                    type="text"
                    onChange={(e) => {
                        getSuggestions(e.target.value)
                    }}></input>

                <div
                    style={{
                        backgroundColor: "white",
                        width: "225px",
                        margin: "0"
                    }}>

                    <ul 
                    style={{
                        listStyleType: "none"
                    }}>
                        {suggestions.map((item, index) => 
                        <li
                            key={index}
                            onClick={() => setWeather(item.key, item.city)}>
                            {item.fullName}
                        </li>
                        )}

                    </ul>
                </div>

            </form>
        </>
    );
}