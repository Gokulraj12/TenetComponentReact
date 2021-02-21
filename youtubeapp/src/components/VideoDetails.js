import React from 'react';

class VideoDetails extends React.Component {
    render() {

        const { video } = this.props;
        console.log(video);

        if (!video) {
            return <div>Loading.............</div>
        }
        else {
            const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

            return (
                <div className='ui segment'>
                    <div className='ui embed'>
                        <iframe title={video.snippet.title} src={videoSrc} />
                    </div>
                    <h4 className='ui header'>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            );
        }
    }
}

export default VideoDetails;