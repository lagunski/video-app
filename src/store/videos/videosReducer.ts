import { Dispatch } from "redux";
import {
  ActionsType,
  addNewVideoAC,
  setCurrentVideosAC,
} from "./videosActionTypes";
import youtubeAPI from "../../api/youtubeAPI";
import getVideoResource from "../../utils/api.utils";
import { VIDEOS_IDS } from "../../constans/common";
import {
  ADD_NEW_VIDEO,
  CHANGE_lIKE_STATUS,
  DELETE_ONE_VIDEO,
  DELETE_VIDEO,
  SET_CURRENT_PAGE,
  SET_CURRENT_VIDEO_ID,
  SET_CURRENT_VIDEOS,
  SORT_ASC,
  SORT_DESC,
  TOGGLE_FILTER,
  TOGGLE_VIEW_MODE,
  TOTAL_VIDEOS_COUNT,
  UPDATE_LOCAL_STORAGE_STATE,
} from "./videosActions";
import { VideosState } from "../../types/VideosState";
import {
  changeLikeStatusVideosFromLS,
  deleteItemFromLS,
  getVideosFromLocalStorage,
} from "../../utils/localStorage.utils";
import { VideosLocalStorageState } from "../../types/VideosLocalStorageState";

const initialState: VideosState = {
  items: [],
  toggleViewMode: false,
  isFetched: true,
  currentVideoId: "",
  isActiveFilter: false,
  isActiveSortAsc: false,
  isActiveSortDesc: false,
  pageSize: 2,
  totalVideosCount: 0,
  currentPage: 1,
};

export const videosReducer = (
  state: VideosState = initialState,
  action: ActionsType
): VideosState => {
  switch (action.type) {
    case SET_CURRENT_VIDEOS:
      const videosFromLS = getVideosFromLocalStorage();
      const result = action.videos.map((video) => {
        const currentVideoFromLS = videosFromLS.find(
          (videoLS) => video.id === videoLS.id
        );
        return { ...video, likeStatus: currentVideoFromLS?.likeStatus };
      });
      return { ...state, items: result };
    case ADD_NEW_VIDEO:
      return { ...state, items: [action.video, ...state.items] };
    case DELETE_VIDEO:
      return { ...state, items: [] };
    case DELETE_ONE_VIDEO:
      const filteredItems = state.items.filter((item) => item.id !== action.id);
      deleteItemFromLS(action.id);
      return {
        ...state,
        items: filteredItems,
      };
    case TOGGLE_VIEW_MODE:
      return { ...state, toggleViewMode: !state.toggleViewMode };
    case SET_CURRENT_VIDEO_ID:
      return { ...state, currentVideoId: action.id };
    case CHANGE_lIKE_STATUS:
      const mappedItems = state.items.map((video) => {
        if (video.id === action.id) {
          return { ...video, likeStatus: !video.likeStatus };
        }
        return video;
      });
      changeLikeStatusVideosFromLS(action.id);
      return {
        ...state,
        items: mappedItems,
      };
    case UPDATE_LOCAL_STORAGE_STATE:
      // state.items.map((item)=> );
      localStorage.setItem(VIDEOS_IDS, JSON.stringify(state));
      return { ...state };
    case TOGGLE_FILTER:
      return { ...state, isActiveFilter: !state.isActiveFilter };
    case SORT_ASC: {
      return {
        ...state,
        isActiveSortAsc: !state.isActiveSortAsc,
        isActiveSortDesc: false,
        items: state.items.sort((a, b) => {
          return (
            new Date(a.snippet.publishedAt).getTime() -
            new Date(b.snippet.publishedAt).getTime()
          );
        }),
      };
    }
    case SORT_DESC: {
      return {
        ...state,
        isActiveSortDesc: !state.isActiveSortDesc,
        isActiveSortAsc: false,
        items: state.items.sort((a, b) => {
          return (
            new Date(b.snippet.publishedAt).getTime() -
            new Date(a.snippet.publishedAt).getTime()
          );
        }),
      };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case TOTAL_VIDEOS_COUNT: {
      return { ...state, totalVideosCount: action.totalVideosCount };
    }
    default:
      return { ...state };
  }
};
// перед dispatch отсортировать videos по type и разные типы загружать из разных ресурсов, объединяя через Promise.all(youtube), getVideoResource(vimeo), getVideoResource(ok)).then([], [], [])
export const loadVideosInfoTC =
  (videos: Array<VideosLocalStorageState>) => (dispatch: Dispatch) => {
    youtubeAPI.getVideosList(videos).then((items) => {
      dispatch(setCurrentVideosAC(items));
    });
  };

export const loadVideoInfoTC = (video: any) => (dispatch: Dispatch) => {
  getVideoResource(video.videoService)([video]).then((item) => {
    dispatch(addNewVideoAC(item[0]));
  });
};
