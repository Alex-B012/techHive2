import { Link } from "react-router-dom"
import "./homeBtn.css"

interface HomeBtnProps {
   content: string;
   link: string;
}

function HomeBtn({ content, link }: HomeBtnProps) {
   return (
      <button className="homeBtn">
         <Link to={link} className="homeBtn__link">{content}</Link>
      </button>
   )
}

export default HomeBtn