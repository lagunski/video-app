import React, {useEffect} from 'react';
import {Header} from "./components/header/Header";
import VideosGrid from "./components/videosGrid/VideosGrid";
import {getVideosFromLocalStorage} from "./utils/localStorage.utils";
import {loadVideosInfoTC} from "./videosReducer";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        initializedVideosIds()
    }, [])

    const initializedVideosIds = () => {
        const videoIds = getVideosFromLocalStorage();
        dispatch(loadVideosInfoTC(videoIds))
    }

    /* const initializedVideoId = () => {
         const videoId = getVideosFromLocalStorage();
         dispatch(LoadVideoTC(videoId))
     }*/

    return (
        <div>
            <Header/>
            <VideosGrid/>
        </div>
    );
}

export default App;


