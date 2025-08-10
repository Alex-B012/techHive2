import InProgressStatement from "../../components/InProgressStatement/InProgressStatement"
import "./team.css"

function Team() {
   return (
      <div className='teamPage'>
         <div className="teamPage__empty"></div>
         <div className="teamPage__container">
            <InProgressStatement />
         </div>
      </div>
   )
}

export default Team