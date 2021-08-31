import { VIDEOS_IDS, VIMEO_PATH } from "../constans/common";
import { VideoType } from "../types/VideoType";
import { VideosLocalStorageState } from "../types/VideosLocalStorageState";

export const getVideosFromLocalStorage = (): Array<VideosLocalStorageState> => {
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

export const changeLikeStatusVideosFromLS = (id: string): void => {
  localStorage.setItem(
    VIDEOS_IDS,
    JSON.stringify(
      getVideosFromLocalStorage().map((item) => {
        if (id === item.id) {
          return { ...item, likeStatus: !item.likeStatus };
        }
        return item;
      })
    )
  );
};

export const deleteItemFromLS = (id: string): void => {
  localStorage.setItem(
    VIDEOS_IDS,
    JSON.stringify(getVideosFromLocalStorage().filter((item) => item.id !== id))
  );
};
