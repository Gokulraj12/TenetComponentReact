import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './commentdetail';


const App = () => {
    return (
        <div className="ui container comments">
            {/*Component Nesting*/}
            <CommentDetail />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));