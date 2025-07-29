import "./footer.css"
import { headerLinks, headerOuterLinks } from '../../data/data'
import Logo from '../../components/Logo/Logo'
import AllRightsReserved from './AllRightsReserved/AllRightsReserved'
import FooterNav from "./FooterNav/FooterNav"
import OuterLinks from "../../components/OuterLinks/OuterLinks"

function Footer() {
   return (
      <footer className='footer__section'>
         <div className="footer__brandInfo">
            <Logo link={headerLinks[0]} />
            <AllRightsReserved />
         </div>
         <div className="footer__contantInfo">
            <FooterNav />
         </div>
         <div className="footer__socials">
            <OuterLinks links={headerOuterLinks} />
         </div>

      </footer>
   )
}

export default Footer