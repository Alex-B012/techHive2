import "./outerLinks.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

interface OuterLink {
   id: number;
   name: string;
   url: string;
   icon: IconDefinition;
}

interface OuterLinksProps {
   links: OuterLink[];
}

function OuterLinks({ links, }: OuterLinksProps) {
   return (
      <div className={`header__outerLinkList `}>
         {links.map((link) => {
            return <Link key={link.id} to={link.url} className={`header__outerLink `}><FontAwesomeIcon icon={link.icon} className="header__outerIcon" /></Link>;
         })}
      </div>
   )
}

export default OuterLinks