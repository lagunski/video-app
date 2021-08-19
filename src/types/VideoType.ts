import { SnippetType } from './SnippetType';
import { StatisticsType } from './StatisticsType';

export type VideoType = {
  id: string,
  snippet: SnippetType,
  statistics: StatisticsType,
}