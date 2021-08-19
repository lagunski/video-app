import { VideoType } from "../../types/VideoType";
import {
  ADD_NEW_VIDEO,
  DELETE_ONE_VIDEO,
  DELETE_VIDEO,
  SET_CURRENT_VIDEO_ID,
  SET_CURRENT_VIDEOS,
  TOGGLE_VIEW_MODE,
} from "./videosActions";

export const setCurrentVideosAC = (videos: Array<VideoType>) =>
  ({ type: SET_CURRENT_VIDEOS, videos } as const);

export const addNewVideoAC = (video: VideoType) =>
  ({ type: ADD_NEW_VIDEO, video } as const);

export const setCurrentVideoId = (id: string) =>
  ({ type: SET_CURRENT_VIDEO_ID, id } as const);

export const deleteAllVideosAC = () => ({ type: DELETE_VIDEO } as const);

export const toggleViewModeAC = () => ({ type: TOGGLE_VIEW_MODE } as const);

export const deleteOneVideoAC = (id: string) =>
  ({ type: DELETE_ONE_VIDEO, id } as const);

export type ActionsType =
  | ReturnType<typeof setCurrentVideosAC>
  | ReturnType<typeof addNewVideoAC>
  | ReturnType<typeof deleteAllVideosAC>
  | ReturnType<typeof deleteOneVideoAC>
  | ReturnType<typeof toggleViewModeAC>
  | ReturnType<typeof setCurrentVideoId>;
