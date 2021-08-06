import {addNewVideoAC, setCurrentVideosAC, VIDEOS_ACTIONS} from "./actions/videos.actions";
import {Dispatch} from "redux";
import youtubeAPI from "./api/youtubeAPI";
import {deleteAllVideosFromLocalStorage} from "./utils/localStorage.utils";
import {getVideoResource} from "./utils/api.utils";

const initialState: any = []

export const videosReducer = (state: any[] = initialState, action: any): any => {
    switch (action.type) {
        case VIDEOS_ACTIONS.SET_CURRENT_VIDEOS:
            return action.videos;
        case VIDEOS_ACTIONS.ADD_NEW_VIDEO:
            return [action.video, ...state];
        case VIDEOS_ACTIONS.DELETE_VIDEO:
            deleteAllVideosFromLocalStorage();
            return [];
    }

    return state
}

export const loadVideosInfoTC = (videos: Array<any>) => {
    // отсортировать videos по type и разные типы загружать из разных ресурсов, объеденяя через Promise.all(youtube), getVideoResource(vimeo), getVideoResource(ok)).then([], [], [])
    return (dispatch: Dispatch) => {
        youtubeAPI.getVideosList(videos).then((items) => {
            dispatch(setCurrentVideosAC(items));
        })
    }
}

export const loadVideoInfoTC = (video: any) => {
    return (dispatch: Dispatch) => {
        getVideoResource(video.type)([video]).then((items) => {
            dispatch(addNewVideoAC(items[0]));
        })
    }
}
