import { createSlice } from "@reduxjs/toolkit"

const preferencesSlice = createSlice({
    name: "preferences",
    initialState: { value: {metric: true , darkMode: false} },
    reducers: {
        changeMetric: (state) => {
            let prefState = JSON.parse(localStorage.getItem("preferences"))
            if (prefState !== undefined || prefState !== null) {
                state.value.metric =  !state.value.metric;
                localStorage.setItem("preferences", JSON.stringify(state.value))
            }
        },
        changeDarkMode: (state) => {
            let prefState = JSON.parse(localStorage.getItem("preferences"))
            if (prefState !== undefined || prefState !== null) {
                state.value.darkMode =  !state.value.darkMode;
                localStorage.setItem("preferences", JSON.stringify(state.value))
            }
           
        },
        setPreferencesState: (state) => {
            let prefState = JSON.parse(localStorage.getItem("preferences"))
            if (prefState !== undefined && prefState !== null) {
                state.value = prefState
            }
        }
    }
});

export const {changeMetric,  changeDarkMode, setPreferencesState } = preferencesSlice.actions


export default preferencesSlice.reducer;