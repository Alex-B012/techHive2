import { useState } from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { headerLinks, headerOuterLinks, burgerBtns } from '../../data/data'

import Logo from "../Logo/Logo"
import NavBar from './NavBar/NavBar';
import OuterLinks from '../OuterLinks/OuterLinks';
import BurgerMenu from './BurgerMenu/BurgerMenu';



function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const openMenu = "openMenu"

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <header>
         <div className="header__row1">
            <Logo link={headerLinks[0]} />
            <NavBar links={headerLinks} state={isMenuOpen} />
            <OuterLinks links={headerOuterLinks} />
            <BurgerMenu state={isMenuOpen} toggleMenuFunc={toggleMenu} />
         </div>
         <div className={`header__row2 ${isMenuOpen ? openMenu : ""}`}>
            <NavBar links={headerLinks} state={isMenuOpen} />
            <OuterLinks links={headerOuterLinks} />
         </div>
         <div className='header__cover'></div>
      </header>
   )
}

export default Header