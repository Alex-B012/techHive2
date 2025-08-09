import "./careersWelcome.css"
import { careersWelcome } from "../../../data/careers"

function CareersWelcome() {
   return (
      <div className="careersWelcome__container">
         <img src={careersWelcome.img.url} alt={careersWelcome.img.name} className="careersWelcome__img" />
         <div className="careersWelcome__textArea">
            <h3 className="careersWelcome__title">
               {careersWelcome.title}
            </h3>
            <p className="careersWelcome__text">
               {careersWelcome.text}
            </p>
         </div>
      </div>
   )
}

export default CareersWelcome