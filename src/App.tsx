import "./App.css";
import PostsContainer from "./components/PostsContainer";
import { fetchUsers } from "./store/reducers/ActionCreators";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const { users, error, isLoading } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="App"
    >
      {/* {isLoading && <h1>Is Loading...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}

      <PostsContainer />
    </div>
  );
};

export default App;
