import { createSlice } from "@reduxjs/toolkit"
import { City } from "../components/models/city";


const citySlice = createSlice({
    name: "city",
    initialState: { value: new City() },
    reducers: {
        setCity: (state, action) => {
            state.value = action.payload
        },
        removeCity: (state) => {
            state.value.city = new City();
        },
    }
});


export const { setCity, getCity } = citySlice.actions;

export default citySlice.reducer;