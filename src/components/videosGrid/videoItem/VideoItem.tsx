import React, { FC } from "react";
import { useDispatch } from "react-redux";
import {
  setCurrentVideoId,
  toggleViewModeAC,
} from "../../../store/videos/videosActionTypes";

type PropsType = {
  id: string;
  title: string;
  likeCount: string;
  viewCount: string;
  publishedAt: string;
  thumbnails: string;
  onDeleteVideo: (id: string) => void;
};

const VideoItem: FC<PropsType> = ({
  id,
  title,
  likeCount,
  viewCount,
  publishedAt,
  thumbnails,
  onDeleteVideo,
}) => {
  const dispatch = useDispatch();

  const deleteVideo = (): void => {
    onDeleteVideo(id);
  };

  const showVideo = () => {
    dispatch(setCurrentVideoId(id));
    dispatch(toggleViewModeAC());
  };

  return (
    <div>
      <div> {title} </div>
      <div> Liczba polubień: {likeCount} </div>
      <div> Liczba odtworzeń: {viewCount}</div>
      <div> Data dodania: {publishedAt}</div>
      <div>
        <img src={thumbnails} alt="miniatura" />
      </div>
      <button type="button" onClick={deleteVideo}>
        delete
      </button>
      <button type="button" onClick={showVideo}>
        view
      </button>
    </div>
  );
};

export default VideoItem;
