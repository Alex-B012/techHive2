import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { headerLinks, headerOuterLinks } from '../../data/data'

function Header() {
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
            <button className='header__burger-btn'>btn</button>
         </div>

         <div className='header__cover'></div>
      </header>
   )
}

export default Header