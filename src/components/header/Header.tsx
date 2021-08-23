import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddVideo from "../searchBar/SearchBar";
import {
  deleteAllVideosAC,
  likeFilterAC,
} from "../../store/videos/videosActionTypes";
import { deleteAllVideosFromLocalStorage } from "../../utils/localStorage.utils";
import { Button } from "reactstrap";
import { AppRootStateType } from "../../store/store";

//  TODO remove any
const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isActiveFilter } = useSelector(
    (state: AppRootStateType) => state.videos
  );
  const onDelete = (): void => {
    dispatch(deleteAllVideosAC());
    deleteAllVideosFromLocalStorage();
  };
  const onFilter = () => {
    dispatch(likeFilterAC());
  };
  return (
    <>
      <AddVideo />
      <Button type="button" onClick={onDelete} style={{ marginRight: "5px" }}>
        delete all
      </Button>
      <Button
        style={{ marginRight: "5px" }}
        type="button"
        onClick={onFilter}
        color={isActiveFilter ? "danger" : "secondary"}
      >
        filter
      </Button>
    </>
  );
};

export default Header;
