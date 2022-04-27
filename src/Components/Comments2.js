import React, { useState, useEffect } from "react";

const Comments2 = () => {
  const [comment, setcomment] = useState({
    name: "",
    message: "",
    type: "web",
  });

  const [commentArray, setCommentArray] = useState([]);

  const [display, setDisplay] = useState("web");

  const SelectedComments = () => {
    return commentArray.map((com, index) => {
      if (com.type === display) {
        return (
          <div>
            <div>{com.name}</div>
            <div>{com.message}</div>
          </div>
        );
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommentArray([...commentArray, comment]);
  };

  useEffect(() => {
    console.log(commentArray);
  }, [...commentArray]);

  return (
    <div>
      <div className="flex justify-center mt-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-3/5 border-2 border-gray-500 justify-center"
        >
          <label>name</label>
          <input
            type="text"
            value={comment.name}
            onChange={(e) => setcomment({ ...comment, name: e.target.value })}
            className="border border-gray-400 rounded-lg w-2/5 "
          />
          <label>message</label>
          <input
            type="text"
            value={comment.message}
            className="border border-gray-400 rounded-lg w-2/5 "
            onChange={(e) =>
              setcomment({ ...comment, message: e.target.value })
            }
          />
          <label>type</label>
          <select
            onChange={(e) => {
              setcomment({ ...comment, type: e.target.value });
              setDisplay(e.target.value);
            }}
            className="border border-gray-400 rounded-lg w-2/5 "
          >
            <option value="web">web</option>
            <option value="mobile">mobile</option>
            <option value="desktop">desktop</option>
          </select>
          <button
            type="submit"
            className="bg-blue-700 rounded-md shadow-md p-1 m-1"
          >
            submit
          </button>
        </form>
      </div>
      <div className="flex flex-col">{SelectedComments()}</div>
    </div>
  );
};

export default Comments2;
