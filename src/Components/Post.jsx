import { useContext } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

import { postListData } from "../store/post-list-store";
export default function Post({ post }) {
  const { deletePost } = useContext(postListData);

  return (
    <div className="Post_body">
      <div className="card post-card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="cart-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <RiDeleteBack2Fill />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-secondary hashtag" key={tag}>
              {tag}
            </span>
          ))}
          <br />
          <div
            className="alert alert-light"
            style={{ margin: "20px 0px 0px 0px" }}
            role="alert"
          >
            {post.reactions} Peoples liked this post
          </div>
        </div>
      </div>
    </div>
  );
}
