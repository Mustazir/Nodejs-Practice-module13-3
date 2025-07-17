import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counter/counterSlice';
import taskSlice from './tasks/taskSlice';


export const store = configureStore({
    reducer: {
     counter :counterSlice,
     todos :taskSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch