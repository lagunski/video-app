import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../header/Header";
import VideosGrid from "../videosGrid/VideosGrid";
import { getVideosFromLocalStorage } from "../../utils/localStorage.utils";
import { loadVideosInfoTC } from "../../store/videos/videosReducer";
import ViewModal from "../viewModal/ViewModal";

function App() {
  const dispatch = useDispatch();

  const initializedVideosIds = () => {
    const videoIds = getVideosFromLocalStorage();
    dispatch(loadVideosInfoTC(videoIds));
  };

  useEffect(() => {
    initializedVideosIds();
  }, []);

  return (
    <div>
      <Header />
      <VideosGrid />
      <ViewModal />
    </div>
  );
}

export default App;
