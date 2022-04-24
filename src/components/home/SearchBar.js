import { useState } from "react";
import { getCityListByString, getWeatherByCityKey } from "../../utils/weather-api-helper"
import { useDispatch } from "react-redux";
import { setCity } from "../../redux/cityReducer";
import notify from "../../utils/Notify";
import { FormStyled } from "../styled-components/Form.styled";


export const SearchBar = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [eTerm, setTerm] = useState("");
    const dispach = useDispatch();

    const getSuggestions = (term) => {
        let searchTerm = term.trim().trimRight();
        if (searchTerm !== "") {
            getCityListByString(searchTerm)
                .then((response) => {
                    setSuggestions(response)
                })
                .catch((error) => {
                    notify.error("Error with fetching data from server")
                    setSuggestions([])
                })
        } else setSuggestions([]);
    }

    const setWeather = (city_key, city_name, full_name) => {
        getWeatherByCityKey(city_key, city_name)
            .then((response) => {
                dispach(setCity(response))
                notify.success("Weather set to " + full_name)
            }).catch((error) => {
                notify.error("Error with fetching data from server")
            }).finally(()=>{
                setTerm("")
                setSuggestions([]);
            })
    }

    return (
        <div>
            <FormStyled onSubmit={e => e.preventDefault()}>
                <div>
                    <input
                        type="text"
                        className="suggestions-input"
                        placeholder="Search..."
                        value={eTerm}
                        onChange={(e) => {
                            setTerm(e.target.value)
                            getSuggestions(e.target.value)

                        }}>

                    </input>

                    <div
                        style={{ display: suggestions.length > 0 || "none" }}
                        className="suggestions-box"
                        onFocus={(e)=>{e.target.style.display =   "none"}}
                        >
                        
                        <ul>
                            {suggestions.map((item, index) =>
                                <li key={index}
                                    onClick={() => {
                                        setWeather(item.key, item.city, item.fullName)
                                        setSuggestions([])
                                    }}>
                                    {item.fullName}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </FormStyled>
        </div>
    );
}