import { ContactsInfo } from '../../../types/contactsInfo';
import './contactsPhone.css'

interface ContactsPhoneProps {
   data: ContactsInfo;
}

function ContactsPhone({ data }: ContactsPhoneProps) {
   return (
      <div className="contactsPhone__container">ContactsPhone</div>
   )
}

export default ContactsPhone