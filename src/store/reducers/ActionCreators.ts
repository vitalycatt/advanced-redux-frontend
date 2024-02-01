import axios from "axios";
import { IUser } from "../../models/IUser";
import { userSlise } from "./UserSlice";
import { AppDispatch } from "../store";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlise.actions.usersFetching());
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(userSlise.actions.usersFetchingSuccess(response.data));
  } catch (error) {
    // TODO: NEED TO CHANGE ERROR MESSAGE
    dispatch(userSlise.actions.usersFetchingError("Something went wrong"));
  }
};
