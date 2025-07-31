import './contactsBusinessHoursList.css'
import ContactsBusinessHours from './ContactsBusinessHours/ContactsBusinessHours';
import { BusinessHours, ContactsInfo } from '../../../../types/contactsInfo';

interface ContactsBusinessHoursListProps {
   data: BusinessHours[];
}

function ContactsBusinessHoursList({ data }: ContactsBusinessHoursListProps) {
   return (
      <ul className='contactsBusinessHoursList__container'>
         {data.map((item) => (<li>
            <ContactsBusinessHours data={item} />
         </li>))}
      </ul>
   )
}

export default ContactsBusinessHoursList