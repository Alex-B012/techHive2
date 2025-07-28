import "./allRightsReserved.css"
import { contact_info, allRights } from "../../../data/data"

function AllRightsReserved() {
   return (
      <div className="allRightsReserved__container">
         <span className="allRightsReserved__span">{`${allRights.iconChar} ${allRights.year}, ${contact_info.company_name}, `}</span>
         <span className="allRightsReserved__span">{`${contact_info.address}. `}</span>
         <span className="allRightsReserved__span">{`${allRights.text}`}</span>
      </div>
   )
}

export default AllRightsReserved