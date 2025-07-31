import { ContactsInfo } from '../../../types/contactsInfo';
import './contactsBusinessHours.css'

interface ContactsBusinessHoursProps {
   data: ContactsInfo;
}

function ContactsBusinessHours({ data }: ContactsBusinessHoursProps) {
   return (
      <div className="contactsBusinessHours__container">
         ContactsBusinessHours
      </div>
   )
}

export default ContactsBusinessHours