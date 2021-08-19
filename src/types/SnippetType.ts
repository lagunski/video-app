export type SnippetType = {
  publishedAt: string,
  title: string,
  thumbnails: {
    default: {
      url: string
    },
    medium: {
      url: string
    },
    high: {
      url: string
    }
  }
}