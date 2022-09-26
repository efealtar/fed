export interface SingleNewsProps {
    title: string;
    description: string;
    category: string;
    source: {
        name: string;
    };
    url: string;
    publishedAt: string;
    urlToImage: string;
    author: string;
    content: string;
  }