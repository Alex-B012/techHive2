import "./footer.css"
import { headerLinks } from '../../data/data'
import Logo from '../Logo/Logo'
import AllRightsReserved from './AllRightsReserved/AllRightsReserved'
import FooterNav from "./FooterNav/FooterNav"

function Footer() {
   return (
      <footer className='footer__section'>
         <div className="footer__brandInfo">
            <Logo link={headerLinks[0]} />
            <AllRightsReserved />
            <FooterNav />
         </div>
      </footer>
   )
}

export default Footer