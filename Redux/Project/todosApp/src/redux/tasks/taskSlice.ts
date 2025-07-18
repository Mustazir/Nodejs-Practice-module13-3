import type { Itasks } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
// import { v4 as uuidv4 } from "uuid";
interface InitialState {
  tasks: Itasks[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: "zFIt_nWg-hF-1PwP1SqFE",
      isCompleted: false,
      title: "Git add",
      description: "Need to Add git hub",
      priority: "HIGH",
      dueDate: "2025-07-22T18:00:00.000Z",
    },
  ],
};

type DraftTask = Pick<Itasks, "title" | "description" | "dueDate" | "priority">;

const createtask = (taskData: DraftTask): Itasks => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Itasks>) => {
      const taskdata = createtask(action.payload);
      state.tasks.push(taskdata);
    },
    toggoleCompletedTask: (state,action:PayloadAction<string>)=>{

      state.tasks.forEach((task)=>task.id===action.payload ? task.isCompleted= !task.isCompleted : task)

    },
    deleteTask: (state,action:PayloadAction<string>)=>{
      state.tasks= state.tasks.filter((task)=>task.id!== action.payload) //here the logic means which task select to delete with out this task then filter and show or store all task in the container

    }
  },
  
});

// normally use this its easier
/*
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
*/

export const { addTask,toggoleCompletedTask,deleteTask } = taskSlice.actions;

export const selectTask = (state: RootState) => {
  return state.todos.tasks;
};

export default taskSlice.reducer;
