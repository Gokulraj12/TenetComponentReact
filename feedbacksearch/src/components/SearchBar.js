import React from 'react';

class SearchBar extends React.Component {

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    //Controlled Component
    state = { searchkey: "" }

    //OnSubmitFunction -preventing default behavior of browser with preventDefault function
    onFormSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.searchkey)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.searchkey} onChange={event => { this.setState({ searchkey: event.target.value }); console.log(event.target.value) }} />
                    </div>
                    {/* <button type='search'>Search</button> */}
                </form>
            </div>
        );
    }
}

export default SearchBar;