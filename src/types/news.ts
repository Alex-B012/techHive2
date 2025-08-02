export interface NewsPageIntroText {
   text: string;
}

export interface NewsPageIntro {
   categoryBtnTitle: string,
   title: string,
   text?: NewsPageIntroText[],
}

export interface NewsCategoryBtnInfo {
   id: number;
   cat_name: string;
}

export interface NewsCategory {
   name: string;
   url: string;
}

export interface NewsCategoriesInfo {
   digital: NewsCategory;
   gaming: NewsCategory;
   tech_hardware: NewsCategory;
   pc_peripherals: NewsCategory;
}

export interface ArticleAuthor {
   name: string,
   img?: string,
}
