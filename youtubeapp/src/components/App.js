import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import Comments from './Comment';
import youtube from '../api/youtube';

class App extends React.Component {

    state = { videos: [], selectedVideo: null, comments: [] };

    onSearchSubmit = async (searchkey) => {
        const response = await youtube.get("/search", {
            params: {
                q: searchkey
            }
        });


        // const commentResponse = await youtube.get("/commentThreads", {
        //     params: {
        //         textFormat: 'plainText',
        //         videoId: response.data.items.id.videoId
        //     }
        // });

        // console.log(commentResponse);


        this.setState(
            {
                videos: response.data.items,
                selectedVideo: response.data.items[0],
                // comments: commentResponse.data.items[0].snippet.topLevelComment
            }
        );
    };

    onVideoSelect = async (video) => {

        console.log("enter here");

        const commentResponse = await youtube.get("/commentThreads", {
            params: {
                textFormat: 'plainText',
                videoId: video.id.videoId
            }
        },
            console.log("entry here in function")
        );

        console.log(commentResponse.data.items);

        this.setState({ selectedVideo: video, comments: commentResponse.data.items });

        // console.log("from the comments", this.state.comments);
    };

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
                            <div>
                                <Comments comments={this.state.comments} />
                            </div>
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