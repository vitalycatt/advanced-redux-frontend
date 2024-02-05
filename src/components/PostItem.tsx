import { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  update: (post: IPost) => void;
  remove: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, update, remove }) => {
  const onRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(post);
  };

  const onUpdate = (e: React.MouseEvent) => {
    const title = prompt() || "";
    update({ ...post, title });
  };
  return (
    <div onClick={onUpdate}>
      {post.id}. {post.title}
      <button onClick={(e) => onRemove(e)}>delete</button>
    </div>
  );
};

export default PostItem;
