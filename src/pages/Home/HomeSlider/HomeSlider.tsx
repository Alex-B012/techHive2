import "./homeSlider.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { ProductCategory } from "../../../types/productCategories"

interface HomeSliderProps {
   data: ProductCategory[];
}

function HomeSlider({ data }: HomeSliderProps) {
   return (
      <Carousel className='homeCarousel__container'>
         {data.map((item) => (
            <Carousel.Item interval={5000} key={item.id} className='homeCarousel__itemContainer'>
               <img src={item.img} alt={item.name} className='homeCarousel__img' />
               <Carousel.Caption className='homeCarousel__caption' >
                  <h3 className='homeCarousel__title'>{item.name}</h3>
                  <p className='homeCarousel__text'>{item.promo}</p>
               </Carousel.Caption>
            </Carousel.Item>))}
      </Carousel>
   );
}

export default HomeSlider;