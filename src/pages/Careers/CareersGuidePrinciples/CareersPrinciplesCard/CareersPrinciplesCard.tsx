import { CareersPrincipleTextData } from '../../../../types/careers'
import './careersPrinciplesCard.css'

interface CareersPrinciplesCardProp {
   principleText: CareersPrincipleTextData,
   reverse?: boolean,
}

function CareersPrinciplesCard({ principleText, reverse = false }: CareersPrinciplesCardProp) {
   let order = ""
   if (reverse) order = "careersPrinciplesCard__container-reverse";

   return (
      <div className={`careersPrinciplesCard__container ${order}`} >
         <img className="careersPrinciplesCard__img" src={principleText.img.url} alt={principleText.img.name} />
         <div className="careersPrinciplesCard__textArea">
            <h4 className="careersPrinciplesCard__title">
               {principleText.title}
            </h4>
            <p className="careersPrinciplesCard__text">
               {principleText.text}
            </p>
         </div>
      </div >
   )
}

export default CareersPrinciplesCard