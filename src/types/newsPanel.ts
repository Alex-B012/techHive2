export interface ArticleImage {
   img_author: string;
   name: string;
   source: string;
   img: string;
}

export interface ArticleVideo {
   video_author: string;
   name: string;
   source: string;
   video: string;
}

export interface ArticleAuthor {
   name: string;
   img: string;
}

export interface Heading {
   heading: string;
   heading_img: ArticleImage;
   heading_video: ArticleVideo;
   heading_yt_video: ArticleVideo;
   paragraphs: string[];
}

export interface Article {
   id: number;
   category: string;
   title: string;
   subtitle: string;
   promoTitle: string;
   article_img: ArticleImage;
   article_video: ArticleVideo;
   article_yt_video: ArticleVideo;
   article_author: ArticleAuthor;
   date: string;
   text: Heading[];
}