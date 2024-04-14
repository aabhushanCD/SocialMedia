import { useContext, useRef } from "react";
import { postListData } from "../store/post-list-store";

export default function Form() {
  const { addPost } = useContext(postListData);
  const TitleElement = useRef();
  const BodyElemetnt = useRef();
  const ReactionElement = useRef();
  const UserIdElement = useRef();
  const TagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = UserIdElement.current.value;
    const title = TitleElement.current.value;
    const body = BodyElemetnt.current.value;
    const Tags = TagsElement.current.value.split(/(\s+)/);
    const reactions = ReactionElement.current.value;

    addPost(userId, title, body, Tags, reactions);
  };
  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            UserId
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your User Id here"
            ref={UserIdElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="How are you feeling today"
            ref={TitleElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Body
          </label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Describe about your self"
            ref={BodyElemetnt}
            rows="7"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Reaction
          </label>
          <input type="text" className="form-control" ref={ReactionElement} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your tags"
            ref={TagsElement}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}
