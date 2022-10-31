import { configureStore } from "@reduxjs/toolkit";
import DatVeReducer from '../Redux/datVeReducer'

export const store = configureStore({
    reducer:{
        DatVeReducer: DatVeReducer,
    }
})