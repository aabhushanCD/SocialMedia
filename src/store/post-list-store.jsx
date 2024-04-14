import { createContext, useReducer } from "react";
export const postListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addPostApi: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (userId, title, body, Tags, reactions) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId,
        tags: Tags,
      },
    });
  };
  const addPostApi = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts:posts,
      },
    });
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
          addPostApi,
        }}
      >
        {children}
      </postListData.Provider>
      ;
    </>
  );
};

export default PostListProvider;
