import { createSlice } from "@reduxjs/toolkit"
import { City } from "../components/models/city";

const citySlice = createSlice({
    name: "city",
    initialState: { value: new City() },
    reducers: {
        setCity: (state, action) => {
            state.value = action.payload
            localStorage.setItem("city", JSON.stringify(state.value))
        },
        removeCity: (state) => {
            state.value = new City();
            localStorage.removeItem("city")
        },
        setCityState: (state) => {
            let cityStorage = JSON.parse(localStorage.getItem("city"))
            if (cityStorage !== undefined && cityStorage !== null) {
                state.value = cityStorage
            }
        }
    }
});


export const { setCity, getCity, setCityState } = citySlice.actions;

export default citySlice.reducer;