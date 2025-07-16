import type { Itasks } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
    tasks :Itasks[]
}

const initialState  : InitialState ={
    tasks :[
        {
        id: "sad",
        title:"saddasd safdsad",
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

export default taskSlice.reducer;    