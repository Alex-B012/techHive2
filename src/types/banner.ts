export interface BannerInterface {
   id: number;
   title: string;
   subtitle: {
      line1: string,
      line2: string
   };
   img: {
      name: string;
      url: string;
   };
}