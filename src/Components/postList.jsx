import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { postListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import Loading from "./loading";
export default function PostList() {
  const { postList, addPostApi } = useContext(postListData);

  // const HandleonClick = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addPostApi(data.posts);
  //     });
  // };
  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    setfetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPostApi(data.posts);
        setfetching(false);
      });
  }, []);

  return (
    <>
      {/* this is for handleonclick function */}
      {/* {postList.length === 0 && (
        <Welcome onGetClicked={HandleonClick}> </Welcome>
      )} */}

      {/* This is for useEffect hook 
     1 useEffect hookis is  use to render for multiple or single times a api have 2 argument 1(function)and other dependency or nothing|?+
     2 while in other state is load or not []->dependency(only render / run initially )
     3 [sfsfjkj]-> adding dependency(run according to dependency array/list changed)
    4 (nothing) also can pass it means run initially and every paint cycle run

      */}
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <Welcome> </Welcome>}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}
