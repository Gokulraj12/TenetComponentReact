import React from 'react';
import VideoCard from './VideoCard';

class VideoList extends React.Component {

    render() {

        const { videos, onVideoSelect } = this.props;

        const renderList = videos.map((video) => {
            return <VideoCard onVideoSelect={onVideoSelect} video={video} />
        });

        return (
            <div className="ui relaxed divided list" >
                {renderList}
            </div>
        );
    }
}

export default VideoList;