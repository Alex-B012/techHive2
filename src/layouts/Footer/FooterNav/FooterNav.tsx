import './footerNav.css'
import { pages_links } from "../../../data/data"
import { filterPageLinksByNames } from '../../../utils/arrayUtils';
import { Link } from 'react-router-dom';

function FooterNav() {
   const pageNames = ["Contacts", "Careers", "Our Team"];
   const filteredPages = filterPageLinksByNames(pages_links, pageNames);

   return (
      <div className='footerNav__container'>
         {filteredPages.map((item) => (
            <Link to={item.link} className='footerNav__link' key={item.id}>{item.name}</Link>)
         )}
      </div>
   )
}

export default FooterNav