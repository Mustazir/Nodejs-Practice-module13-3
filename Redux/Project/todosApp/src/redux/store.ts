import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counter/counterSlice';
import taskSlice from './tasks/taskSlice';
import userSlice from './users/userSlice';


export const store = configureStore({
    reducer: {
     counter :counterSlice,
     todos :taskSlice,
     user :userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch