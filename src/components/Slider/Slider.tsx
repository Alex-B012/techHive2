import "./slider.css"
import { ProductCategory } from "../../types/productCategories"

interface SliderProps {
   data: ProductCategory[];
}

function Slider({ data }: SliderProps) {
   return (
      <div className="slider__container">
         This is
         Slider

         in progress
      </div>
   )
}

export default Slider