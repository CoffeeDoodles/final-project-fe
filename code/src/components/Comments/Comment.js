import React from 'react';
import moment from 'moment';

const Comment = ({ commentPost }) => {
    return (
        <>
            <div className="recieved-comment-container" key={commentPost._id}>
                <h4 className="comment-input">{commentPost.message}</h4>
                <div className="date-container">
                    <p aria_label="time when posted" className="date">{moment(commentPost.created).fromNow()}</p>
                </div>
            </div>
        </>
    );
}

export default Comment;