import React from 'react';

class SearchBar extends React.Component {

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={event => { console.log(event.target.value) }} />
                    </div>
                    {/* <button type='search'>Search</button> */}
                </form>
            </div>
        );
    }
}

export default SearchBar;