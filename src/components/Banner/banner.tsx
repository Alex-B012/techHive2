import { BannerInterface } from "../../types/banner"
import "./banner.css"

interface BannerProps {
   data: BannerInterface;
}

function Banner({ data }: BannerProps) {
   return (
      <section className="banner__section">
         <img className="banner__img" src={data.img.url} alt={data.img.name} />
         <div className="banner__cover">
            <h2 className="banner__title">{data.title}</h2>
            <h3 className="banner__subtitle">
               <span className="banner__subtitleSpan">{data.subtitle.line1}</span><span className="banner__subtitleSpan">{`  ${data.subtitle.line2}`}</span>
            </h3>
         </div>
      </section>
   )
}

export default Banner