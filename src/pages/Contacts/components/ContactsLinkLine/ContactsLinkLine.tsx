import { Link } from "react-router-dom";
import "./contactsLinkLine.css"
import { formatPhoneNumber } from "../../../../utils/contacts";

interface ContactsLinkLineInterface {
   data: string;
   link: string;
}

function ContactsLinkLine({ data, link }: ContactsLinkLineInterface) {
   let result = data;
   if (link === "tel") result = formatPhoneNumber(data);
   return (
      <div className="contactsLinkLine__container">
         <Link className={`contactsLinkLine__link ${link === "mailto" ? link : ""}`} to={`${link}:${result}`} >
            {data}
         </Link>
      </div>
   )
}

export default ContactsLinkLine