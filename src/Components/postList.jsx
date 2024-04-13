import { useContext } from "react";
import Post from "./Post";

import { postListData } from "../store/post-list-store";
export default function PostList() {
  const { postList } = useContext(postListData);

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
