import { BusinessHours } from "../../../../../types/contactsInfo";
import "./contactsBusinessHours.css"

interface ContactsBusinessHoursProps {
   data: BusinessHours;
}

function ContactsBusinessHours({ data }: ContactsBusinessHoursProps) {
   return (
      <div className="contactsBusinessHours__line">
         <span className="contactsBusinessHours__span">{`${data.days}:`}</span>
         <span className="contactsBusinessHours__span" >{data.hours}</span>
      </div >
   )
}

export default ContactsBusinessHours