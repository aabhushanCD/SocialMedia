import { createContext, useReducer } from "react";
export const postListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const DefaultPostList = [
  {
    id: "1",
    title: "Going to America",
    body: "First time in for America",
    reactions: 8,
    userId: "user-9",
    tags: ["America"],
  },
  {
    id: "2",
    title: "Going to Bhutan",
    body: "Bhutan is the beautyful country in the heart of the Asia",
    reactions: 9,
    userId: "user-11",
    tags: ["Bhutan", "hills", "mountains"],
  },
];

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DefaultPostList
  );
  const addPost = (PostId) => {
    console.log("submitted");
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <>
      <postListData.Provider
        value={{
          postList,
          addPost,
          deletePost,
        }}
      >
        {children}
      </postListData.Provider>
      ;
    </>
  );
};

export default PostListProvider;