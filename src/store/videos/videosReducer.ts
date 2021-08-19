import { Dispatch } from "redux";
import {
  ActionsType,
  addNewVideoAC,
  setCurrentVideosAC,
} from "./videosActionTypes";
import youtubeAPI from "../../api/youtubeAPI";
import getVideoResource from "../../utils/api.utils";
import { VIDEOS_IDS } from "../../constans/common";
import { VideoType } from "../../types/VideoType";
import {
  ADD_NEW_VIDEO,
  DELETE_ONE_VIDEO,
  DELETE_VIDEO,
  SET_CURRENT_VIDEO_ID,
  SET_CURRENT_VIDEOS,
  TOGGLE_VIEW_MODE,
} from "./videosActions";
import { VideosState } from "../../types/VideosState";

const initialState: VideosState = {
  items: [],
  toggleViewMode: false,
  isFetched: true,
  currentVideoId: "",
};

export const videosReducer = (
  state: VideosState = initialState,
  action: ActionsType
): VideosState => {
  switch (action.type) {
    case SET_CURRENT_VIDEOS:
      return { ...state, items: action.videos };
    case ADD_NEW_VIDEO:
      return { ...state, items: [action.video, ...state.items] };
    case DELETE_VIDEO:
      return { ...state, items: [] };
    case DELETE_ONE_VIDEO:
      const deleteOneVideoFromLocalStorage = (): void => {
        const copyState = state.items.filter((item) => item.id !== action.id);
        localStorage.setItem(VIDEOS_IDS, JSON.stringify(copyState));
      };
      deleteOneVideoFromLocalStorage();
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case TOGGLE_VIEW_MODE:
      return { ...state, toggleViewMode: !state.toggleViewMode };
    case SET_CURRENT_VIDEO_ID:
      return { ...state, currentVideoId: action.id };
    default:
      return { ...state };
  }
};
// перед dispatch отсортировать videos по type и разные типы загружать из разных ресурсов, объединяя через Promise.all(youtube), getVideoResource(vimeo), getVideoResource(ok)).then([], [], [])
export const loadVideosInfoTC =
  (videos: Array<VideoType>) => (dispatch: Dispatch) => {
    youtubeAPI.getVideosList(videos).then((items) => {
      dispatch(setCurrentVideosAC(items));
    });
  };

export const loadVideoInfoTC = (video: any) => (dispatch: Dispatch) => {
  getVideoResource(video.type)([video]).then((item) => {
    dispatch(addNewVideoAC(item[0]));
  });
};
