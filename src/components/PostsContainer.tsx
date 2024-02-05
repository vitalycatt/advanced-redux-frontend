import PostItem from "./PostItem";
import { FC } from "react";
import { IPost } from "../models/IPost";
import { postApi } from "../services/PostService";

const PostsContainer: FC = () => {
  const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery(15);
  const [createPost, {}] = postApi.useCreatePostMutation();
  const [removePost, {}] = postApi.useDeletePostMutation();
  const [updatePost, {}] = postApi.useUpdatePostMutation();

  const onCreate = async () => {
    const title = prompt();
    await createPost({ body: title, title } as IPost);
  };

  return (
    <div>
      {!error && <button onClick={onCreate}>Create a Post</button>}

      {isLoading && <h1>Is Loading...</h1>}
      {error && <h1>Something went wrong :(</h1>}
      {posts &&
        posts.map((post: IPost) => (
          <PostItem
            key={post.id}
            post={post}
            update={(post: IPost) => updatePost(post)}
            remove={(post: IPost) => removePost(post)}
          />
        ))}
    </div>
  );
};

export default PostsContainer;
