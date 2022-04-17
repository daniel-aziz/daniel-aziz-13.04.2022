import { createSlice } from "@reduxjs/toolkit"

const unitsSlice = createSlice({
    name: "units",
    initialState: { value: "METRIC" },
    reducers: {
        changeUnits: (state, action) => {
          state.value =  state.value === "METRIC" || "IMPERIAL" ;
        },
        getUnits: (state, action) => {
            return state.value;
        }
    }
});

export default unitsSlice.reducer;