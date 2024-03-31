export interface BlogData {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: Array<{
    title: string;
    pubDate: string;
    link: string;
    author: string;
    thumbnail: string;
    description: string;
    enclosure: Object;
    categories: Array<string>;
  }>;
}

export default async function collectBlogData() {
  const response: Response = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@abhisheksriram845"
  );
  return await response.json();
}
