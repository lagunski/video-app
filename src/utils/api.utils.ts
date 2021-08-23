import youtubeAPI from "../api/youtubeAPI";
import { VideoService } from "../types/VideoService";

const API_RESOURCES = {
  [VideoService.YOUTUBE]: youtubeAPI.getVideosList,
  [VideoService.VIMEO]: youtubeAPI.getVideosList,
};

const getVideoResource = (serviceType: VideoService) =>
  API_RESOURCES[serviceType];

export default getVideoResource;
