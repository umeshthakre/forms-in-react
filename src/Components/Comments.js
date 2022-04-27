import React from "react";
import { useState, useEffect } from "react";

const Comments = () => {
  const [comment, setcomment] = useState({
    name: "",
    message: "",
    type: "web",
  });

  const [commentArray, setCommentArray] = useState([]);

  const [display, setDisplay] = useState("web");

  const handleSubmit = (event) => {
    event.preventDefault();
    setCommentArray([comment, ...commentArray]);
    setcomment({ ...comment, message: "", name: "" });
  };

  useEffect(() => {
    console.log(comment);
    console.log(commentArray);
  }, [comment]);

  const SetComments = () => {
    return commentArray.map((com, index) => {
      if (com.type === display) {
        return (
          <div
            key={index}
            className="border-2 border-green-400  m-4 rounded-md flex flex-col justify-center p-4 "
          >
            <p> name:{com.name}</p>
            <p>{com.message}</p>
          </div>
        );
      }
    });
  };

  return (
    <div className="flex justify-center flex-row">
      <div>
        <div className="m-3">Comments</div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="comment"
            value={comment.message}
            onChange={(e) =>
              setcomment({ ...comment, message: e.target.value })
            }
            required={true}
            className="mb-4   border-2 border-blue-300 focus:border-blue-800 focus:border-2 outline-none"
          />
          <input
            type="text"
            placeholder="name"
            value={comment.name}
            onChange={(e) => setcomment({ ...comment, name: e.target.value })}
            required={true}
            className="mb-4   border-2 border-blue-300 focus:border-blue-800 focus:border-2 outline-none"
          />
          <select
            onChange={(e) => {
              setcomment({ ...comment, type: e.target.value });
              setDisplay(e.target.value);
            }}
            className="  mb-5 outline-none border-2 border-blue-300 focus:border-blue-800 "
          >
            <option value="web">web</option>
            <option value="mobile">mobile</option>
            <option value="desktop">desktop</option>
          </select>
          <button
            type="submit"
            className="self-start bg-green-500 rounded-lg p-1 m-1 shadow-md px-3 "
          >
            Add comment
          </button>
        </form>
        <div>
          <SetComments />
        </div>
      </div>
    </div>
  );
};

export default Comments;
