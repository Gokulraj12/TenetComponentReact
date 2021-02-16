import React from 'react';
import unsplash from '../api/unsplash';
//import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] }

    // onSearchSubmit = (searchkey) => {
    //     //console.log(searchkey);
    //     axios.get("https://api.unsplash.com/search/photos", {
    //         params: { query: searchkey },
    //         headers: {
    //             Authorization: 'Client-ID R2Wd436bsXK0eHIfmB4VqhEhgkNmHn5aDS1AtgPrYrs'
    //         }
    //         //when we have to wait for the api response ,we can use then /async functions
    //     }).then(response => {
    //         console.log(response.data.results);
    //     });
    // };


    //Another way of waiting for the api to return for the response
    // async onSearchSubmit(searchkey) {
    //     //console.log(searchkey);
    //     const response = await axios.get("https://api.unsplash.com/search/photos", {
    //         params: { query: searchkey },
    //         headers: {
    //             Authorization: 'Client-ID R2Wd436bsXK0eHIfmB4VqhEhgkNmHn5aDS1AtgPrYrs'
    //         }
    //         //when we have to wait for the api response ,we can use then /async functions
    //     });
    //     console.log(response.data.results);
    // };

    onSearchSubmit = async (searchkey) => {
        //console.log(searchkey);
        const response = await unsplash.get("https://api.unsplash.com/search/photos", {
            params: { query: searchkey },
            // headers: {
            //     Authorization: 'Client-ID R2Wd436bsXK0eHIfmB4VqhEhgkNmHn5aDS1AtgPrYrs'
            // }
            //when we have to wait for the api response ,we can use then /async functions
        });
        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;