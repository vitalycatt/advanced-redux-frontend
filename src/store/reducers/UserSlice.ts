import { IUser } from "../../models/IUser";
import { fetchUsers } from "./ActionCreators";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  users: IUser[];
  error: string;
  isLoading: boolean;
}

const initialState: UserState = {
  users: [],
  error: "",
  isLoading: false,
};

export const userSlise = createSlice({
  name: "user",
  initialState,
  reducers: {},

  // TODO: NEED TO FIX PROBLEM WITH 'ADDCASE'
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(
  //       fetchUsers.fulfilled,
  //       (state, action: PayloadAction<IUser[]>) => {
  //         state.isLoading = false;
  //         state.error = "";
  //         state.users = action.payload;
  //       }
  //     )
  //     .addCase(fetchUsers.rejected, (state, action: PayloadAction<string>) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     })
  //     .addCase(fetchUsers.pending, (state) => {
  //       state.isLoading = true;
  //     });
  // },
});

export default userSlise.reducer;
