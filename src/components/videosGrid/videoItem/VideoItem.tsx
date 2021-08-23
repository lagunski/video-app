import React, { FC } from "react";
import { useDispatch } from "react-redux";
import {
  changeLikeStatusAC,
  setCurrentVideoId,
  toggleViewModeAC,
} from "../../../store/videos/videosActionTypes";
import { Button } from "reactstrap";

type PropsType = {
  id: string;
  title: string;
  likeCount: string;
  viewCount: string;
  publishedAt: string;
  thumbnails: string;
  likeStatus: boolean;
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
  likeStatus,
}) => {
  const dispatch = useDispatch();

  const deleteVideo = (): void => {
    onDeleteVideo(id);
  };

  const showVideo = (): void => {
    dispatch(setCurrentVideoId(id));
    dispatch(toggleViewModeAC());
  };

  const changeLikeStatus = (): void => {
    dispatch(changeLikeStatusAC(id, likeStatus));
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
      <div style={{ paddingTop: "10px" }}>
        <Button
          style={{ marginRight: "5px" }}
          type="button"
          onClick={deleteVideo}
        >
          delete
        </Button>
        <Button
          style={{ marginRight: "5px" }}
          type="button"
          onClick={showVideo}
        >
          view
        </Button>
        <Button
          style={{ marginRight: "5px" }}
          type="button"
          color={likeStatus ? "danger" : "secondary"}
          onClick={changeLikeStatus}
        >
          like
        </Button>
      </div>
    </div>
  );
};

export default VideoItem;
