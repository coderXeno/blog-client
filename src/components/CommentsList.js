import React from "react";

export default function CommentsList({comments}){
    return(
        <div className="cm-div">
            <h3 className="cm-title sm:text-2xl text-xl font-bold mt-6 mb-6 text-gray-900">Comments</h3>
            {comments.map((comment,index)=>(
                <div key={index} className="comments-div">
                    <h4 className="comment-name text-xl font-bold">{comment.username}</h4>
                    <p className="mt-1 mb-4 comment-text">{comment.text}</p>         
                </div>
            ))}
        </div>
    );
};