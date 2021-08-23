import { SnippetType } from "./SnippetType";
import { StatisticsType } from "./StatisticsType";
import { VideoService } from "./VideoService";

export type VideoType = {
  id: string;
  snippet: SnippetType;
  statistics: StatisticsType;
  likeStatus?: boolean;
  videoService?: VideoService;
};
