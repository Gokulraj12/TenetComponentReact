import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import youtube from '../api/youtube';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    onSearchSubmit = async (searchkey) => {
        const response = await youtube.get("/search", {
            params: {
                q: searchkey
            }
        });

        this.setState(
            { videos: response.data.items, selectedVideo: response.data.items[0] }
        );
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
        console.log("from the app", video);
    }

    componentDidMount() {
        this.onSearchSubmit('thor');
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column" style={{ cursor: 'pointer' }} >
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;