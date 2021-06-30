import React from 'react'

import Comment from './Comment';

const CommentList = ({ commentList }) => {
    return (
        <>
            {commentList.map(commentPost => (
                <Comment
                    key={commentPost._id}
                    commentPost={commentPost}   
                />
            ))}
        </>
    );
};

export default CommentList;