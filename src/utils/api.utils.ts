import {VIDEO_SERVICES} from "./idFinder";
import youtubeAPI from "../api/youtubeAPI";

const API_RESOURCES = {
    [VIDEO_SERVICES.YOUTUBE]: youtubeAPI.getVideosList,
    [VIDEO_SERVICES.VIMEO]: youtubeAPI.getVideosList
}

export const getVideoResource = (serviceType: VIDEO_SERVICES) => {
    return API_RESOURCES[serviceType];
}