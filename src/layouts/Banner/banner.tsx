import "./banner.css"
import { Carousel } from "react-bootstrap";
import BannerImage from "./BannerImage/BannerImage";
import { BannerInterface } from "../../types/banner"

interface BannerProps {
   data: BannerInterface[];
}

function Banner({ data }: BannerProps) {
   return (
      <section className="banner__section">
         <Carousel indicators={false} controls={false} interval={8000}>
            {data.map((item) => (
               <Carousel.Item key={item.id}>
                  <BannerImage img_data={item} />
               </Carousel.Item>))}
         </Carousel>
      </section >
   )
}

export default Banner