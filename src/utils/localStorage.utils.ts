import idFinder from "./idFinder";
import {VIDEOS_IDS} from "../constans/common";

export const addVideoToLocalStorage = (video: any): void => {
    const searchDataFromLocalStorage = [...getVideosFromLocalStorage(), video]

    localStorage.setItem(VIDEOS_IDS,
        JSON.stringify(searchDataFromLocalStorage));
};

export const getVideosFromLocalStorage = (): Array<string> => {
    const videosIds = localStorage.getItem(VIDEOS_IDS);

    if (videosIds) {
        return JSON.parse(videosIds);
    }

    return [];
}

export const deleteAllVideosFromLocalStorage = () => {
    localStorage.setItem(VIDEOS_IDS,
        JSON.stringify([]));
}