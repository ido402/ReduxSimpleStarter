import React from 'react';
import VideoListItem from './video_list_item';

//functional component structure
const VideoList = (props) => {

   const videoItems = props.vidoes.map((video) => {
        return <VideoListItem video={video} />
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;