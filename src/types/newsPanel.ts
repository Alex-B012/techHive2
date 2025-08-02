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

type ArticleParagraph = {
   id_par: number;
   heading?: string;
   heading_img?: ImageData;
   heading_video?: VideoData;
   heading_yt_video?: VideoData;
   paragraphs: string[];
}

export type NewsItem = {
   id: number;
   category: string;
   title: string;
   subtitle?: string;
   promoTitle?: string;
   article_img: ImageData;
   article_video?: VideoData;
   article_yt_video?: VideoData;
   article_author: ArticleAuthor;
   date: string;
   text: ArticleParagraph[];
   source?: ArticleSource;
};