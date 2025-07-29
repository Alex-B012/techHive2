import "./allRightsReserved.css"
import { contact_info, allRights } from "../../../data/data"

function AllRightsReserved() {
   return (
      <div className="allRightsReserved__container">
         <div className="allRightsReserved__line">{`${allRights.iconChar} ${allRights.year}, ${contact_info.company_name} `}</div>
         <div className="allRightsReserved__line ">
            <span className="allRightsReserved__span">{`${contact_info.address.street}, `}</span>
            <span className="allRightsReserved__span">{`${contact_info.address.city}, ${contact_info.address.state} ${contact_info.address.zipcode}, ${contact_info.address.country}`} </span>
         </div>
         <div className="allRightsReserved__line">{`${allRights.text}`}</div>
      </div>
   )
}

export default AllRightsReserved