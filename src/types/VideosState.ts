import { VideoType } from "./VideoType";

export type VideosState = {
  items: Array<VideoType>;
  toggleViewMode: boolean;
  isFetched: boolean;
  currentVideoId: string;
};
