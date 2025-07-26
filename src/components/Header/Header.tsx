import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { headerLinks, headerOuterLinks, burgerBtns } from '../../data/data'




function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   // Toggle the menu state
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };


   return (
      <header>
         <Link to={headerLinks[0].url} className='header__logoLink'><img src="/techHive4.svg" alt="Logo" className='header__logo' /></Link>
         <nav className="header__navbar">
            {headerLinks.map((link) => {
               return <Link key={link.id} to={link.url} className='header__link'>{link.name}</Link>;
            })}
         </nav>
         <div className="header__outerLinkList">
            {headerOuterLinks.map((link) => {
               return <Link key={link.id} to={link.url} className='header__outerLink'><FontAwesomeIcon icon={link.icon} className="header__outerIcon" /></Link>;
            })}
         </div>

         <div className='header__burger'>
            {isMenuOpen ? (<button className='header__burger-btn'><FontAwesomeIcon icon={burgerBtns[0].icon} className="header__closeBtn" /></button>) : (<button className='header__burger-btn'><FontAwesomeIcon icon={burgerBtns[1].icon} className="header__closeBtn" /></button>)}
         </div>

         <div className='header__cover'></div>
      </header>
   )
}

export default Header