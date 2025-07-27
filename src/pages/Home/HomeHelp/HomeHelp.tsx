import "./homeHelp.css"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons'

function HomeHelp() {
   return (
      <div className="homeHelp_container">
         <p className="homePage__question">Can we help you?</p>
         <Link to="" className="homePage__callLink call-anim">
            <FontAwesomeIcon icon={faSquarePhone} className="homePage__outerIcon " />
         </Link >
      </div >
   )
}

export default HomeHelp