import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './commentdetail';


const App = () => {
    return (
        <div className="ui container comments">
            {/*Component Nesting*/}
            <CommentDetail
                name="Gokul"
                text="First Comment!"
                avatar="https://source.unsplash.com/random/"
            />
            <CommentDetail
                name="Ram"
                text="Second comment!"
                avatar="https://source.unsplash.com/random"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));