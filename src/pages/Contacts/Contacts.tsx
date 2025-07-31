import Logo from "../../components/Logo/Logo"
import PageTitle from "../../components/PageTitle/PageTitle"
import { contact_info } from "../../data/data"
import "./contacts.css"
import ContactsAddress from "./ContactsAddress/ContactsAddress"
import ContactsBusinessHours from "./ContactsBusinessHours/ContactsBusinessHours"
import ContactsEmail from "./ContactsEmail/ContactsEmail"
import ContactsMap from "./ContactsMap/ContactsMap"
import ContactsPhone from "./ContactsPhone/ContactsPhone"

function Contacts() {
   return (
      <div className='contactsPage'>
         <div className="contactsPage__empty"></div>
         <div className="contactsPage__container">
            <PageTitle title={"Contacts"} />
            <div className="contactsPage__logoContainer">
               <Logo />
            </div>
            <ContactsAddress data={contact_info} />
            <ContactsBusinessHours data={contact_info} />
            <ContactsPhone data={contact_info} />
            <ContactsEmail data={contact_info} />
            <ContactsMap />
         </div>
      </div>
   )
}

export default Contacts