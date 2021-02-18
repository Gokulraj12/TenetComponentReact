import React from 'react';

class SearchBar extends React.Component {

    state = { searchkey: "" };

    onSearchParamChange = event => {
        this.setState({ searchkey: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.searchkey)

    };
    render() {
        return (
            <div className="search-bar ui segment">
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" placeholder="search videos..." onChange={this.onSearchParamChange} value={this.state.searchkey} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;