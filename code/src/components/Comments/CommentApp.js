/*Outer Dependencies */
import React, { useState, useEffect } from "react";

/* Local Dependencies */
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { COMMENT_API_URL } from "../../reuseables/urls";



const CommentApp = () => {
  const [commentList, setCommentList] = useState([]);
  const [commentNew, setCommentNew] = useState('');

  useEffect(() => {
    fetchCommentList();
  }, []);

  const fetchCommentList = () => {
    fetch(COMMENT_API_URL)
      .then((res) => res.json())
      .then((recievedComments) => setCommentList(recievedComments))
      .catch((err) => console.error(err));
  };

  const handleCommentNewChange = (event) => {
    setCommentNew(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: commentNew }),
    };

    fetch(COMMENT_API_URL, options)
      .then((res) => res.json())
      .then(() => 
      fetchCommentList(),
      setCommentNew('')
      )
  };


  return (
    <div className="comments-container">
      <CommentForm
        onFormSubmit={handleFormSubmit}
        commentNew={commentNew}
        onCommentNewChange={handleCommentNewChange}
      />
      <CommentList
        commentList={commentList}
      />
    </div>
  );
};

export default CommentApp
