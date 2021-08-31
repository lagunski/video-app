import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header/Header";
import VideosGrid from "../videosGrid/VideosGrid";
import { getVideosFromLocalStorage } from "../../utils/localStorage.utils";
import { loadVideosInfoTC } from "../../store/videos/videosReducer";
import ViewModal from "../viewModal/ViewModal";
import { setTotalVideosCount } from "../../store/videos/videosActionTypes";
import { AppRootStateType } from "../../store/store";

function App() {
  const dispatch = useDispatch();
  const { pageSize } = useSelector((state: AppRootStateType) => state.videos);

  const initializedVideosIds = () => {
    const videoIds = getVideosFromLocalStorage();
    dispatch(setTotalVideosCount(videoIds.length));
    dispatch(loadVideosInfoTC(videoIds.slice(0, pageSize)));
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
