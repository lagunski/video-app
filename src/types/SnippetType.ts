export type SnippetType = {
  publishedAt: string | Date;
  title: string;
  thumbnails: {
    default: {
      url: string;
    };
    medium: {
      url: string;
    };
    high: {
      url: string;
    };
  };
};
