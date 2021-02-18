import React from 'react';

class VideoCard extends React.Component {
    render() {

        const { video, onVideoSelect } = this.props;
        return (
            <div onClick={() => onVideoSelect(video)} className="item" key={video.id.videoId}>
                <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                <div className="content">
                    <div className="header">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoCard;