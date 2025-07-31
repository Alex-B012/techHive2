import "./contactsLinkLine.css"

function ContactsLine(data: string) {
   return (
      <div className="contactsLine__container">
         <p className={`contactsLine__link`}> {data}</p>
      </div>
   )
}

export default ContactsLine