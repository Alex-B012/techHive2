import React from 'react'
import "./home.css"
import Slider from '../../components/Slider/Slider'
import { productCategories_data } from '../../data/productCategories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import HomeBtn from './HomeBtn/HomeBtn'

function Home() {
   return (
      <div className='homePage'>
         <Slider data={productCategories_data} />
         <HomeBtn content="See More" link={""} />
         <div className="homePage__helpContainer">
            <p className="homePage__question">Can we help you?</p>
            <button className="homePage__callBtn"><FontAwesomeIcon icon={faSquarePhone} className="header__outerIcon" /> </button>
         </div>
      </div>
   )
}

export default Home