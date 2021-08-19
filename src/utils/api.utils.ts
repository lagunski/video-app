import { VideoServices } from './idFinder';
import youtubeAPI from '../api/youtubeAPI';

const API_RESOURCES = {
  [VideoServices.YOUTUBE]: youtubeAPI.getVideosList,
  [VideoServices.VIMEO]: youtubeAPI.getVideosList
};

const getVideoResource = (serviceType: VideoServices) => API_RESOURCES[serviceType];

export default getVideoResource;
