export enum VIDEOS_ACTIONS {
    SET_CURRENT_VIDEOS = 'SET_CURRENT_VIDEOS',
    ADD_NEW_VIDEO = 'ADD_NEW_VIDEO',
    DELETE_VIDEO = 'DELETE_VIDEO',
    CHANGE_LIKE_STATUS_VIDEO = 'CHANGE_LIKE_STATUS_VIDEO'
}

export const setCurrentVideosAC = (videos: any[]) => ({type: VIDEOS_ACTIONS.SET_CURRENT_VIDEOS, videos});

export const addNewVideoAC = (video: Array<string>) => ({type: VIDEOS_ACTIONS.ADD_NEW_VIDEO, video});

export const deleteAllVideosAC = () => ({type: VIDEOS_ACTIONS.DELETE_VIDEO})