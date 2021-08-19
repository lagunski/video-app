import { VIDEOS_IDS } from "../constans/common";
import { VideoType } from '../types/VideoType';

export const getVideosFromLocalStorage = (): Array<VideoType> => {
  const videosIds = localStorage.getItem(VIDEOS_IDS);

  if (videosIds) {
    return JSON.parse(videosIds);
  }

  return [];
};

export const addVideoToLocalStorage = (video: any): void => {
  const searchDataFromLocalStorage = [video, ...getVideosFromLocalStorage()];

  localStorage.setItem(VIDEOS_IDS, JSON.stringify(searchDataFromLocalStorage));
};

export const deleteAllVideosFromLocalStorage = () => {
  localStorage.setItem(VIDEOS_IDS, JSON.stringify([]));
};
