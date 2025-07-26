import { Link } from "react-router-dom";
import "./navbar.css"

interface LinkItem {
   id: number;
   name: string;
   url: string;
}

interface NavBarProps {
   links: LinkItem[];
}



function NavBar({ links }: NavBarProps) {
   return (
      <nav className={`header__navbar`}>
         {
            links.map((item) => {
               return (
                  <Link key={item.id} to={item.url} className="header__link">
                     {item.name}
                  </Link>
               );
            })
         }
      </nav >
   );
}

export default NavBar;