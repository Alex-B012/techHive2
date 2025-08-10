import { Link } from "react-router-dom"
import "./btn.css"

interface BtnProps {
   content: string;
   link: string;
   id?: number | string;
}

function Btn({ content, link, id = "" }: BtnProps) {
   const stringId = typeof id === 'number' ? String(id) : id;
   return (
      <button className="btn" id={stringId}>
         <Link to={link} className="btn__link">{content}</Link>
      </button>
   )
}

export default Btn