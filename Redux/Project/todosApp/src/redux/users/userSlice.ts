import type { IUsers } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface InitialState {
  users: IUsers[];
}

const initialState: InitialState = {
  users: [],
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
      state.users.push(userData);
    },
  },
});

export const { addUser } = userSlice.actions;
export const selectUsers = (state: RootState) => state.user.users
export default userSlice.reducer;
