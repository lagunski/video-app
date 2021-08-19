import React from 'react';
import { useDispatch } from 'react-redux';
import AddVideo from '../searchBar/SearchBar';
import { deleteAllVideosAC } from '../../store/videos/videosActionTypes';
import { deleteAllVideosFromLocalStorage } from '../../utils/localStorage.utils';

//  TODO remove any
const Header: React.FC = () => {
  const dispatch = useDispatch();
  const onDelete = (): void => {
    dispatch(deleteAllVideosAC());
    deleteAllVideosFromLocalStorage();
  };
  return (
    <>
      <AddVideo />
      <button type='button' onClick={onDelete}>delete all</button>
    </>
  );
};

export default Header;