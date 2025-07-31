import { ContactsInfo } from "../../../types/contactsInfo";
import "./contactsAddress.css"

interface ContactsAddressProps {
   data: ContactsInfo;
}

function ContactsAddress({ data }: ContactsAddressProps) {
   return (
      <div className="contactsAddress__container">
         <span className="contactsAddress__span">{`${data.address.street}, `}</span>
         <span className="contactsAddress__span">{`${data.address.city}, ${data.address.state} ${data.address.zipcode}, ${data.address.country}`} </span>
      </div>
   )
}

export default ContactsAddress