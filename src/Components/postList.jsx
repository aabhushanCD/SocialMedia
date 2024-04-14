import { useContext } from "react";
import Post from "./Post";
import { postListData } from "../store/post-list-store";
import Welcome from "./Welcome";
export default function PostList() {
  const { postList, addPostApi } = useContext(postListData);

  const HandleonClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPostApi(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <Welcome onGetClicked={HandleonClick}> </Welcome>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
