import { BannerInterface } from "../../../types/banner";
import "./bannerImage.css"

interface BannerImageProps {
   img_data: BannerInterface;
}

function BannerImage({ img_data }: BannerImageProps) {
   return (
      <div className="bannerImage__container">
         <img className="banner__img" src={img_data.img.url} alt={img_data.img.name} />
         <div className="banner__cover">
            <h2 className="banner__title">{img_data.title}</h2>
            <h3 className="banner__subtitle">
               <span className="banner__subtitleSpan">{img_data.subtitle.line1}</span><span className="banner__subtitleSpan">{`  ${img_data.subtitle.line2}`}</span>
            </h3>
         </div>
      </div>

   )
}

export default BannerImage