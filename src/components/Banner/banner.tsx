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
         <Carousel>
            {data.map((item) => (
               <Carousel.Item interval={1000}>
                  <BannerImage img_data={item} key={item.id} />
               </Carousel.Item>))}
         </Carousel>
      </section>
   )
}

export default Banner