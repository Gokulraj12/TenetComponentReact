import React from 'react';

const Spinner = props => {
    return (
        <div>
            <div className="ui active transition visible dimmer">
                <div className="content">
                    <div className="ui loader"> {props.message}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;