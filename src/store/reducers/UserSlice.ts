import { IUser } from "../../models/IUser";
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
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlise.reducer;
