import { VideoType } from "../../types/VideoType";
import {
  ADD_NEW_VIDEO,
  CHANGE_lIKE_STATUS,
  DELETE_ONE_VIDEO,
  DELETE_VIDEO,
  SET_CURRENT_VIDEO_ID,
  SET_CURRENT_VIDEOS,
  SORT_ASC,
  SORT_DESC,
  TOGGLE_FILTER,
  TOGGLE_VIEW_MODE,
  UPDATE_LOCAL_STORAGE_STATE,
} from "./videosActions";

export const setCurrentVideosAC = (videos: Array<VideoType>) =>
  ({ type: SET_CURRENT_VIDEOS, videos } as const);

export const addNewVideoAC = (video: VideoType) =>
  ({ type: ADD_NEW_VIDEO, video } as const);

export const setCurrentVideoId = (id: string) =>
  ({ type: SET_CURRENT_VIDEO_ID, id } as const);

export const deleteAllVideosAC = () => ({ type: DELETE_VIDEO } as const);

export const toggleViewModeAC = () => ({ type: TOGGLE_VIEW_MODE } as const);

export const sortAscAC = () => ({ type: SORT_ASC } as const);

export const sortDescAC = () => ({ type: SORT_DESC } as const);

export const likeFilterAC = () => ({ type: TOGGLE_FILTER } as const);

export const deleteOneVideoAC = (id: string) =>
  ({ type: DELETE_ONE_VIDEO, id } as const);

export const changeLikeStatusAC = (id: string, likeStatus: boolean) =>
  ({ type: CHANGE_lIKE_STATUS, id, likeStatus } as const);

export const updateLocalStorageStateAC = () =>
  ({ type: UPDATE_LOCAL_STORAGE_STATE } as const);

export type ActionsType =
  | ReturnType<typeof setCurrentVideosAC>
  | ReturnType<typeof addNewVideoAC>
  | ReturnType<typeof deleteAllVideosAC>
  | ReturnType<typeof deleteOneVideoAC>
  | ReturnType<typeof toggleViewModeAC>
  | ReturnType<typeof setCurrentVideoId>
  | ReturnType<typeof changeLikeStatusAC>
  | ReturnType<typeof updateLocalStorageStateAC>
  | ReturnType<typeof likeFilterAC>
  | ReturnType<typeof sortAscAC>
  | ReturnType<typeof sortDescAC>;
