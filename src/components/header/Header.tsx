import React from 'react';
import {AddVideo} from "../searchBar/SearchBar";
import {deleteAllVideosAC} from "../../actions/videos.actions";
import {useDispatch} from "react-redux";

//TODO remove any
export const Header = () => {
    const dispatch = useDispatch();
    const onDelete = () => dispatch(deleteAllVideosAC())
    return (
        <>
            <AddVideo/>
            <button onClick={onDelete}>delete all</button>
        </>
    );
}

