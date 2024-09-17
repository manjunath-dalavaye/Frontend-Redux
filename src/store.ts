import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./components/counterSlice";

export const store=configureStore({
    reducer: {
        counter: counterSlice
    }
})


export type RootState= ReturnType<typeof store.getState>;
export type DispatchState=typeof store.dispatch;