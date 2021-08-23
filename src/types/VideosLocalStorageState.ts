import { VideoService } from "./VideoService";

export type VideosLocalStorageState = {
  id: string;
  likeStatus?: boolean;
  videoService: VideoService;
};
