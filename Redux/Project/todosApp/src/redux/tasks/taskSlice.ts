import type { Itasks } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
// import { v4 as uuidv4 } from "uuid";
interface InitialState {
  tasks: Itasks[];
  filter :"ALL" | "LOW"|"MEDIUM"|"HIGH";
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
  filter: "ALL",
};

type DraftTask = Pick<Itasks, "title" | "description" | "dueDate" | "priority">;

const createtask = (taskData: DraftTask): Itasks => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskdata = createtask(action.payload);
      state.tasks.push(taskdata);
    },
    toggoleCompletedTask: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    filterTask: (state,action : PayloadAction<"ALL" | "LOW" | "MEDIUM" | "HIGH">) => {
      state.filter = action.payload;
    },
    // filterTask: (state, action: PayloadAction<"ALL" | "LOW" | "MEDIUM" | "HIGH">) => {
    //   state.filter = action.payload;
    //   const filteredTasks = state.tasks.filter((task) => {
    //     if (action.payload === "ALL") {
    //       return true;
    //     } else {
    //       return task.priority === action.payload;
    //     }
    //   });

    
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload); //here the logic means which task select to delete with out this task then filter and show or store all task in the container
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: string; updatedData: Partial<Itasks> }>
    ) => {
      const { id, updatedData } = action.payload;
      const index = state.tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...updatedData };
      }
    },
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

export const { addTask, toggoleCompletedTask, deleteTask, updateTask,filterTask } =
  taskSlice.actions;

export const selectTask = (state: RootState) => {
  const filter = state.todos.filter;

  if(filter=== "LOW"){
    return state.todos.tasks.filter((task) => task.priority === "LOW");
  }
  if(filter=== "MEDIUM"){
    return state.todos.tasks.filter((task) => task.priority === "MEDIUM");
  }
  if(filter=== "HIGH"){
    return state.todos.tasks.filter((task) => task.priority === "HIGH");
  }
  else{
    return state.todos.tasks; 
  }


};
export const selectFilter = (state: RootState) => {
  return state.todos.tasks;
};

export default taskSlice.reducer;
