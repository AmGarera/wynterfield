export default interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  icon: string;
  favicon: string;
  language: string;
  nextUrl: string;
}

export interface FeedAttributes {
  id: string;
  title: string;
  attachments: Attachment[];
  url: string;
  contentHtml: string;
  contentText: string;
  image: string;
  bannerImage: string;
  datePublished: string;
  microfeed: {
    status: string;
    isAudio: boolean;
    isDocument: boolean;
    isExternalUrl: boolean;
    isVideo: boolean;
    isImage: boolean;
    webUrl: string;
    jsonUrl: string;
    rssUrl: string;
    guid: string;
    datePublishedShort: string;
    datePublishedMs: number;
    itunesTitle: string;
    itunesBlock: boolean;
    itunesEpisodeType: string;
    itunesSeason: number;
    itunesEpisode: number;
    itunesExplicit: boolean;
  };
}

interface Attachment {
  url: string;
  mimeType: string;
  sizeInBytes: number;
  durationInSeconds: number;
}
