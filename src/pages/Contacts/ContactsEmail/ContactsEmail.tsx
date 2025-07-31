import { ContactsInfo } from '../../../types/contactsInfo';
import './contactsEmail.css'

interface ContactsEmailProps {
   data: ContactsInfo;
}

function ContactsEmail({ data }: ContactsEmailProps) {
   return (
      <div className="contactsEmail__container">ContactsEmail</div>
   )
}

export default ContactsEmail