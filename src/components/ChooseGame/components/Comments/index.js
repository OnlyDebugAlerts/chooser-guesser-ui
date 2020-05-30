import React from 'react';
import './index.scss';
import CommentItem from './comment-item';

export default () => {
    const points = [];
    return (
        <div className="comments-container">
            {
                points.map((user, index) => <CommentItem key={index} user={user} />)
            }
        </div>
    )
}