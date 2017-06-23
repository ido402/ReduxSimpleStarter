import React from 'react';

//functional component structure
const VideoDetail = ({video}) => {
    //const video = props.video;

    if(!video){
        return (<div>Loading...</div>);
    }

    const videoId = video.id.videoId;
    //const videoUrl = 'http://www.youtube.com/embed/' + videoId; //one way to do it.
    const videoUrl = `https://www.youtube.com/embed/${videoId}`; //second way - string interpulation
     
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoUrl}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;