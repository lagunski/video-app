import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoItem from "./videoItem/VideoItem";
import { AppRootStateType } from "../../store/store";
import { deleteOneVideoAC } from "../../store/videos/videosActionTypes";

const VideosGrid = () => {
  const { items } = useSelector((state: AppRootStateType) => state.videos);
  const dispatch = useDispatch();

  const onDeleteOneVideo = (id: string) => {
    dispatch(deleteOneVideoAC(id));
  };

  return (
    <div>
      {items.map((video) => (
        <div key={video.id}>
          <VideoItem
            key={video.id}
            id={video.id}
            title={video.snippet.title}
            likeCount={video.statistics.likeCount}
            viewCount={video.statistics.viewCount}
            publishedAt={video.snippet.publishedAt}
            thumbnails={video.snippet.thumbnails.medium.url}
            onDeleteVideo={onDeleteOneVideo}
          />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default VideosGrid;
