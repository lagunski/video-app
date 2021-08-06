import React from 'react';
import VideoItem from "./videoItem/VideoItem";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store";
import {deleteAllVideosAC} from "../../actions/videos.actions";

const VideosGrid = () => {
    const videos: any = useSelector<AppRootStateType>((state) => state.videos);
    console.log('videos', videos)



    return (
        <div>
            {videos.map((video: any) => <VideoItem key={video.id} title={video.snippet.title}/>)}
        </div>
    );
};

export default VideosGrid;