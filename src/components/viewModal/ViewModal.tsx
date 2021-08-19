import React, { FC, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./viewModal.module.css";
import { AppRootStateType } from "../../store/store";
import { toggleViewModeAC } from "../../store/videos/videosActionTypes";

const ViewModal: FC = () => {
  const dispatch = useDispatch();
  const { toggleViewMode, currentVideoId } = useSelector(
    (state: AppRootStateType) => state.videos
  );
  const closeModal = () => {
    dispatch(toggleViewModeAC());
  };

  return useMemo(() => {
    if (toggleViewMode) {
      return (
        <div className={classes.wrapper}>
          <div className={classes.videoWrapper}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${currentVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button type="button" onClick={closeModal}>
            CLOSE
          </button>
        </div>
      );
    }
    return <></>;
  }, [toggleViewMode]);
};

export default ViewModal;
