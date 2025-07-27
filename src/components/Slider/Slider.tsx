// import "./slider.css"
// import { ProductCategory } from "../../types/productCategories"

// interface SliderProps {
//    data: ProductCategory[];
// }

// function Slider({ data }: SliderProps) {
//    return (
//       <div className="slider__container">
//          This is
//          Slider

//          in progress
//       </div>
//    )
// }

// export default Slider
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function Slider({ data }) {
   return (
      <Carousel>
         <Carousel.Item interval={2000}>
            {/* <ExampleCarouselImage text="First slide" /> */}
            hi
            <img src={""} alt={""} />
            <Carousel.Caption>
               <h3>First slide label</h3>
               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item interval={2000}>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            hi2
            <Carousel.Caption>
               <h3>Second slide label</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item interval={2000}>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            hi3
            <Carousel.Caption>
               <h3>Third slide label</h3>
               <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
               </p>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
}

export default Slider;