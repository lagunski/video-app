import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddVideo from "../searchBar/SearchBar";
import {
  deleteAllVideosAC,
  likeFilterAC,
  sortDescAC,
  sortAscAC,
  setCurrentPageAC,
} from "../../store/videos/videosActionTypes";
import { deleteAllVideosFromLocalStorage } from "../../utils/localStorage.utils";
import { Button } from "reactstrap";
import { AppRootStateType } from "../../store/store";
import classes from "./header.module.css";
import Pagination from "../pagination";

//  TODO remove any
const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isActiveFilter, isActiveSortAsc, isActiveSortDesc } = useSelector(
    (state: AppRootStateType) => state.videos
  );
  const onDelete = (): void => {
    dispatch(deleteAllVideosAC());
    deleteAllVideosFromLocalStorage();
  };
  const onFilter = (): void => {
    dispatch(likeFilterAC());
  };

  const onSortedAsc = (): void => {
    dispatch(sortAscAC());
  };

  const onSortedDesc = (): void => {
    dispatch(sortDescAC());
  };

  return (
    <>
      <AddVideo />
      <div className={classes.wrapper}>
        <Button type="button" onClick={onDelete}>
          delete all
        </Button>
        <Button
          type="button"
          onClick={onFilter}
          color={isActiveFilter ? "danger" : "secondary"}
        >
          filter
        </Button>
        <Button
          type="button"
          onClick={onSortedAsc}
          color={isActiveSortAsc ? "danger" : "secondary"}
        >
          Sort Asc
        </Button>
        <Button
          type="button"
          onClick={onSortedDesc}
          color={isActiveSortDesc ? "danger" : "secondary"}
        >
          Sort Desc
        </Button>
        <Pagination />
      </div>
    </>
  );
};

export default Header;
