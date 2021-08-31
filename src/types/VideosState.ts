import { VideoType } from "./VideoType";

export type VideosState = {
  items: Array<VideoType>;
  toggleViewMode: boolean;
  isFetched: boolean;
  currentVideoId: string;
  isActiveFilter: boolean;
  isActiveSortAsc: boolean;
  isActiveSortDesc: boolean;
  pageSize: number;
  totalVideosCount: number;
  currentPage: number;
};
