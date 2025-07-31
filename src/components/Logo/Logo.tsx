import { Link } from 'react-router-dom';
import "./logo.css"

interface LogoProps {
   link?: {
      url?: string;
   };
}

function Logo({ link = {} }: LogoProps) {
   return (
      <div>
         <Link to={link?.url || "/"} className="header__logoLink">
            <img src="/techHive4.svg" alt="Logo" className="header__logo" />
         </Link>
      </div>
   );
}

export default Logo;