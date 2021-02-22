import React from 'react';

const Comments = ({ comments }) => {

    //console.log(comments);

    const commentList = comments.map((comment) => {
        const { snippet } = comment.snippet.topLevelComment;

        return (
            <div className="ui segment" >
                <div className='ui comment'>
                    <div>
                        {snippet.authorDisplayName}
                    </div>
                    <div>
                        {snippet.publishedAt}
                    </div>
                    <div>
                        {snippet.textDisplay}
                    </div>
                    <div>
                        {snippet.updatedAt}
                    </div>
                </div>

            </div>
        );

    });

    return (
        <div className='ui segment'>
            <div className='ui header'>Comments</div>
            <div>
                {commentList}
            </div>
        </div>
    );
}

export default Comments;
