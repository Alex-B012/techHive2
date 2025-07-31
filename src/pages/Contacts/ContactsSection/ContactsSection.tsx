import { ContactsInfo } from '../../../types/contactsInfo';
import ContactsBusinessHoursList from '../components/ContactsBusinessHoursList/ContactsBusinessHoursList';
import ContactsLinkLine from '../components/ContactsLinkLine/ContactsLinkLine';
import ContactsAddress from '../ContactsAddress/ContactsAddress';
import './contactsSection.css'

interface ContactsSectionProps {
   data: ContactsInfo;
   title?: string;
}

function ContactsSection({ data, title = "" }: ContactsSectionProps) {
   const specialCase = "address"

   const renderContent = () => {
      switch (title) {
         case "Address":
            return <ContactsAddress data={data} />;
         case "Business Hours":
            return <ContactsBusinessHoursList data={data.business_hours} />;
         case "Phone":
            return <ContactsLinkLine data={data.phone} link="tel" />;
         case "Email":
            return <ContactsLinkLine data={data.email} link="mailto" />;
         default:
            return null;
      }
   };

   return (
      <div className="contactsSection__container">
         {title && title !== specialCase && (
            <h4 className="contactsSection__title">
               {title}
            </h4>
         )}
         <div className="contactsSection__content">
            {renderContent()}
         </div>
      </div>
   );
}

export default ContactsSection