import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoItem from "./videoItem/VideoItem";
import { AppRootStateType } from "../../store/store";
import { deleteOneVideoAC } from "../../store/videos/videosActionTypes";
import { VideoType } from "../../types/VideoType";

const VideosGrid: FC = () => {
  const { items, isActiveFilter } = useSelector(
    (state: AppRootStateType) => state.videos
  );
  const dispatch = useDispatch();

  const onDeleteOneVideo = (id: string) => {
    dispatch(deleteOneVideoAC(id));
  };

  const filteredItems = items.filter((item) => item.likeStatus);

  const callBack = (video: VideoType) => (
    <div key={video.id}>
      <hr />
      <VideoItem
        key={video.id}
        id={video.id}
        title={video.snippet.title}
        likeCount={video.statistics.likeCount}
        viewCount={video.statistics.viewCount}
        publishedAt={video.snippet.publishedAt}
        thumbnails={video.snippet.thumbnails.medium.url}
        likeStatus={video.likeStatus ? video.likeStatus : false}
        onDeleteVideo={onDeleteOneVideo}
      />
      <hr />
    </div>
  );

  {
    /*TODO Like statuses*/
  }
  return (
    <div>
      {isActiveFilter ? filteredItems.map(callBack) : items.map(callBack)}
    </div>
  );
};

export default VideosGrid;
