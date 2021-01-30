import React from 'react';

//Reusable Component creation
const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avator-icon" src={props.avatar} style={{ height: '50px', width: '50px', paddingRight: "10px" }} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.name}
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00 PM</span>
                </div>
                <div className="text">{props.text}</div>
            </div>
        </div>
    );
};

export default CommentDetail;