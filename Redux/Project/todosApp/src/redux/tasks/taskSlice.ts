import type { Itasks } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface InitialState{
    tasks :Itasks[]
}

const initialState  : InitialState ={
    tasks :[
        {
        id: "sad123213",
        title:"saddasd safdsad",
        description :"lorem sjadhs sajdkh",
        dueDate: "2025-01",
        isCompleted: false,
        priority: "LOW"
    },
        {
        id: "aaaasadsadsad3213",
        title:"aaasaddasd safdsad",
        description :"lorem sjadhs sajdkh",
        dueDate: "2025-01",
        isCompleted: false,
        priority: "HIGH"
    },
    ]
}

const taskSlice= createSlice({
        name :"tasks",
        initialState,
        reducers:{}
})

export const selectTask =(state :RootState)=>{
    return state.todos.tasks
}

export default taskSlice.reducer;    