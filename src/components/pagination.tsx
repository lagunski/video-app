import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../store/store";
import classes from "./pagination.module.css";
import { setCurrentPageAC } from "../store/videos/videosActionTypes";
import { getVideosFromLocalStorage } from "../utils/localStorage.utils";
import { loadVideosInfoTC } from "../store/videos/videosReducer";

const Pagination = () => {
  const dispatch = useDispatch();
  const { pageSize, totalVideosCount, currentPage } = useSelector(
    (state: AppRootStateType) => state.videos
  );

  const setCurrentPage = (pageNumber: number): void => {
    dispatch(setCurrentPageAC(pageNumber));
    const videoIds = getVideosFromLocalStorage();
    dispatch(
      loadVideosInfoTC(
        videoIds.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
      )
    );
  };

  const pagesCount = useMemo(
    () => Math.ceil(totalVideosCount / pageSize),
    [totalVideosCount, pageSize]
  );
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.wrapper}>
      {pages.map((p) => {
        return (
          <span
            className={currentPage === p ? classes.selectedPage : ""}
            onClick={() => {
              setCurrentPage(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
