import "./careers.css"
import CareersGuidePrinciples from "./CareersGuidePrinciples/CareersGuidePrinciples"
import CareersWelcome from "./CareersWelcome/CareersWelcome"

function Careers() {
   return (
      <div className='careersPage'>
         <div className="careersPage__empty"></div>
         <div className="careersPage__container">
            <CareersWelcome />
            <CareersGuidePrinciples />
         </div>
      </div>
   )
}

export default Careers