import type { IUsers } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface InitialState {
  users: IUsers[];
}

const initialState: InitialState = {
  users: [
    {
      id: "qhOz9LKJVlAUxWmpTz0P7",
      name: "Mustazir Billah",
    },
  ],
};

type DraftUser = Pick<IUsers, "name">;

const createUser = (userData: DraftUser): IUsers => {
  return {
    id: nanoid(),
    ...userData,
  };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftUser>) => {
      const userData = createUser(action.payload);
      console.log("Reducer received:", userData); // ✅ Add this
      state.users.push(userData);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload); //here the logic means which task select to delete with out this task then filter and show or store all task in the container
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export const selectUsers = (state: RootState) => state.user.users;
export default userSlice.reducer;
