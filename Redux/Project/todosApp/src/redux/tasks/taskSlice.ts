import type { Itasks } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { v4 as uuidv4 } from "uuid";
interface InitialState{
    tasks :Itasks[]
}

const initialState  : InitialState ={
    tasks :[
       
    ]
}

const taskSlice= createSlice({
        name :"tasks",
        initialState,
        reducers:{
            addTask:(state,action:PayloadAction<Itasks>)=>{

                
                const taskdata={
                    ...action.payload,
                    id:uuidv4()
                }
                state.tasks.push(taskdata)


            }
        }
})

export const { addTask } = taskSlice.actions;

export const selectTask =(state :RootState)=>{
    return state.todos.tasks
}

export default taskSlice.reducer;    