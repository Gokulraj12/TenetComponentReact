import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="ui-container-comments">
            <div className="comments">
                <a href="/" className="avatar">
                    <img alt="avator-icon" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Athira
                    </a>
                </div>
                <div className="metadata">
                    <span className="date">Today at time</span>
                </div>
                <div className="text">
                    First Comment!
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));