import { useState, useEffect } from 'react'
import "./header.css"
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

   const closeMobileMenu = () => {
      if (window.innerWidth > 700) setIsMenuOpen(false);
   };

   useEffect(() => {
      closeMobileMenu();
      const handleResize = () => {
         closeMobileMenu();
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <header>
         <div className="header__row1">
            <Logo link={headerLinks[0]} />
            <NavBar links={headerLinks} />
            <OuterLinks links={headerOuterLinks} />
            <BurgerMenu state={isMenuOpen} toggleMenuFunc={toggleMenu} />
         </div>
         <div className={`header__row2 ${isMenuOpen ? openMenu : ""}`}>
            <div className='header__mobileMenu'>
               <NavBar links={headerLinks} />
               <OuterLinks links={headerOuterLinks} />
            </div>
         </div>
         <div className='header__cover'></div>
      </header>
   )
}

export default Header