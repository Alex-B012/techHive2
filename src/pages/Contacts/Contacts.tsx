import { contact_info } from "../../data/data"
import "./contacts.css"
import PageTitle from "../../components/PageTitle/PageTitle"
import Logo from "../../components/Logo/Logo"
import Map from "../../components/Map/Map"
import ContactsSection from "./ContactsSection/ContactsSection"


function Contacts() {
   return (
      <div className='contactsPage'>
         <div className="contactsPage__empty"></div>
         <div className="contactsPage__container">
            <PageTitle title={"Contacts"} />
            <div className="contactsPage__logoContainer">
               <Logo />
            </div>
            <ContactsSection data={contact_info} title="Address" />
            <ContactsSection data={contact_info} title="Business Hours" />
            <ContactsSection data={contact_info} title="Phone" />
            <ContactsSection data={contact_info} title="Email" />
            <Map />
         </div>
      </div>
   )
}

export default Contacts