import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avator-icon" src="https://source.unsplash.com/random" style={{ height: '50px', width: '50px', paddingRight: "10px" }} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Athira
                        </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00 PM</span>
                    </div>
                    <div className="text">First Comment!</div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));