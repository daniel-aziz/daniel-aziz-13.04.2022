import { createSlice } from "@reduxjs/toolkit"
import { containsCityByKey } from "../utils/helper"

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: { value: [] },
    reducers: {
        addToFavorites: (state, action) => {
            if (action.payload.key.length > 0) {
                let favStorage = JSON.parse(localStorage.getItem("favorites"))
                console.log(typeof favStorage)
                if (favStorage !== undefined || favStorage !== null || !containsCityByKey(action.payload.key, favStorage)) {
                    state.value.push(action.payload)
                    localStorage.setItem("favorites", JSON.stringify(state.value))
                } else {
                    favStorage.push(action.payload)
                    localStorage.removeItem("favorites")
                    localStorage.setItem("favorites", JSON.stringify(state.value))
                }
            }
        },
        removeFromFavorites: (state, action) => {
            if (action.payload.key.length > 0) {
                let favStorage = JSON.parse(localStorage.getItem("favorites"))
                if (favStorage !== undefined || favStorage !== null || containsCityByKey(action.payload.key, favStorage)) {
                    state.value = state.value.filter(item => item.key !== action.payload.key)
                    localStorage.setItem("favorites", JSON.stringify(state.value))
                }
            }
        },
        setFavoritesState: (state) => {
            let favStorage = JSON.parse(localStorage.getItem("favorites"))
            if (favStorage !== undefined && favStorage !== null) {
                state.value = favStorage
            }
        }
    }
});



export const { addToFavorites, removeFromFavorites, setFavoritesState } = favoritesSlice.actions

export default favoritesSlice.reducer;