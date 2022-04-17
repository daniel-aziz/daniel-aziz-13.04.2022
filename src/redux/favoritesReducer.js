import { createSlice } from "@reduxjs/toolkit"

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: { value: [] },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },
        remove: (state, action) => {
            state.value = state.value.filter(item => item !== action.payload)
        },
        getAll: (state, action) => {
            return state.value
        }
    }
});

export const  {add, remove, getAll}  = favoritesSlice.actions

export default favoritesSlice.reducer;