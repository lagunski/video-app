import {
  FULL_YOUTUBE_PATH,
  SHORT_YOUTUBE_PATH,
  VIMEO_PATH,
} from "../constans/common";
import { VideosLocalStorageState } from "../types/VideosLocalStorageState";
import { VideoService } from "../types/VideoService";

// export enum VideoServices {
//   YOUTUBE = "YOUTUBE",
//   VIMEO = "VIMEO",

// }

// const VIDEO_SERVICES_PATH = [
//   {
//     type: VideoServices.YOUTUBE,
//     path: FULL_YOUTUBE_PATH,
//   },
//   {
//     type: VideoServices.YOUTUBE,
//     path: SHORT_YOUTUBE_PATH,
//   },
//   {
//     type: VideoServices.VIMEO,
//     path: VIMEO_PATH,
//   },
// ];

// export const getVideoServiceInfo = (url: string): { id: string, type: VideoServices } => {
//   const videoServiceInUrl = VIDEO_SERVICES_PATH.find(service => url.includes(service.path));
//
//   if (!videoServiceInUrl) {
//     return {
//       id: url, // is videoId
//       type: VideoServices.YOUTUBE
//     };
//   }
//
//   return {
//     id: url.replace(videoServiceInUrl.path, ''),
//     type: videoServiceInUrl.type
//   };
//
//   // if (str.includes(FULL_YOUTUBE_PATH)) {
//   //     return str.replace(FULL_YOUTUBE_PATH, '');
//   // }
//   //
//   // if (str.includes(SHORT_YOUTUBE_PATH)) {
//   //     return str.replace(SHORT_YOUTUBE_PATH, '');
//   // }
//   //
//   // return str;
// };

export const getVideoServiceInfo = (str: string): VideosLocalStorageState => {
  if (str.includes(FULL_YOUTUBE_PATH)) {
    return {
      id: str.replace(FULL_YOUTUBE_PATH, ""),
      videoService: VideoService.YOUTUBE,
    };
  }

  if (str.includes(SHORT_YOUTUBE_PATH)) {
    return {
      id: str.replace(SHORT_YOUTUBE_PATH, ""),
      videoService: VideoService.YOUTUBE,
    };
  }
  //TODO разобратся с вимео
  if (str.includes(VIMEO_PATH)) {
    return {
      id: str.replace(VIMEO_PATH, ""),
      videoService: VideoService.VIMEO,
    };
  }

  return {
    id: str,
    videoService: VideoService.YOUTUBE,
  };
};

export default getVideoServiceInfo;
