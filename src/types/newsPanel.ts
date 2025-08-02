export type ImageData = {
   img_author?: string;
   name: string;
   source?: string;
   img: string;
};

export type VideoData = {
   video_author?: string;
   name: string;
   source?: string;
   video: string;
};

type ArticleAuthor = {
   name: string;
   img: string;
};

type ArticleSource = {
   name?: string;
   url?: string;
};

export type ArticleParagraphInterface = {
   id_par: number;
   heading?: string;
   heading_imgObj?: ImageData;
   heading_videoObj?: VideoData;
   heading_yt_videoObj?: VideoData;
   paragraphs: string[];
}

export type NewsItem = {
   id: number;
   category: string;
   title: string;
   subtitle?: string;
   promoTitle?: string;
   article_imgObj: ImageData;
   article_videoObj?: VideoData;
   article_yt_videoObj?: VideoData;
   article_authorObj: ArticleAuthor;
   date: string;
   text: ArticleParagraphInterface[];
   source?: ArticleSource;
};