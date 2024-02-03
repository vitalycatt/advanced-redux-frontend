import { FC } from "react";
import { postApi } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

const PostsContainer: FC = () => {
  const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery(5);
  return (
    <div>
      {isLoading && <h1>Is Loading...</h1>}
      {error && <h1>Something went wrong :(</h1>}
      {posts &&
        posts.map((post: IPost) => <PostItem key={post.id} post={post} />)}
    </div>
  );
};

export default PostsContainer;
