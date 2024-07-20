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

export interface Attachment {
  url: string;
  mime_type: string;
  size_in_bytes: number;
  duration_in_seconds: number;
}

export interface Microfeed {
  status: string;
  is_audio: boolean;
  is_document: boolean;
  is_external_url: boolean;
  is_video: boolean;
  is_image: boolean;
  web_url: string;
  json_url: string;
  rss_url: string;
  guid: string;
  date_published_short: string;
  date_published_ms: number;
  ["itunes:title"]: string;
  ["itunes:block"]: boolean;
  ["itunes:episodeType"]: string;
  ["itunes:season"]: number;
  ["itunes:episode"]: number;
  ["itunes:explicit"]: boolean;
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
  microfeed: Microfeed;
  items: PostAttributes[];
}
