import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';



const App = () => {
    return (
        <div className="ui container comments">
            {/*Component Nesting*/}
            <ApprovalCard>
                <CommentDetail
                    name="Gokul"
                    text="First Comment!"
                    avatar="https://source.unsplash.com/random/"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    name="Ram"
                    text="Second comment!"
                    avatar="https://source.unsplash.com/random"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));