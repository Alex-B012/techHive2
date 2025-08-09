import './careersGuidePrinciples.css'
import CareersPrinciplesCard from './CareersPrinciplesCard/CareersPrinciplesCard'
import { guidingPrincipals } from "../../../data/careers"

function CareersGuidePrinciples() {
   return (
      <div className="careersPrinciples">
         <h3 className="careersPrinciples__mainTitle">
            {guidingPrincipals.title}
         </h3>
         {guidingPrincipals.text_data.map((principal) => (
            <CareersPrinciplesCard
               principleText={principal}
               reverse={principal.id % 2 !== 0}
               key={principal.id} />
         )
         )
         }
      </div>
   )
}

export default CareersGuidePrinciples