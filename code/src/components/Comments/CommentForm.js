import React from "react";

const CommentForm = ({ commentNew, onCommentNewChange, onFormSubmit }) => {
  return (
    <>
      <form className="comment-form" onSubmit={onFormSubmit}>
        <label htmlFor="newComment">Have helpful information? Comment below!</label>
        <textarea
          className="new-comment"
          id="newComment"
          type="text"
          placeholder="Help out a lost friend find their way home again."
          value={commentNew}
          onChange={onCommentNewChange}
        ></textarea>
          {/* <p className='characterCounter'>{commentNew.length}/240</p> */}
        <button type="submit">Comment</button>
      </form>
    </>
  );
};

export default CommentForm;
