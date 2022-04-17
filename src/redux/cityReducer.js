import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import globals from "../utils/Globals";






const citySlice = createSlice({
    name: "city",
    initialState: {
        value: {}

    },
    reducers: {
        setCity: (state, action) => {

        },
        getCity: (state, action) => {
            let url = globals.urls.CURRENT_CONDITION
            url = url.toString().replace("<city_key>", "215854")
            const data = {city: {}, forcast: {}}
            axios.get(url).then((response)=>{
                console.log(console.log(response))
                data.city = response.data[0]
            })
            state.value = {

            }
            
        },
        setForcast: (state, action) => {
            state.value.forcast = action.payload;
        },
        getForcast: (state, action) => {
            return state.value.forcast;
        }
    }
});
function setCityValues(data) {
    return {
        city: {
            name: "",
            description: data.WeatherText,
            MetricDegree: "",
        }
    }

}

function setForcastValues(data) {
    return ""
           
}

export const { getCity } = citySlice.actions;
export default citySlice.reducer;