import React from 'react'
import "./home.css"
import HomeSlider from './HomeSlider/HomeSlider'
import { productCategories_data } from '../../data/pricing/productCategories'

import HomeBtn from './HomeBtn/HomeBtn'
import HomeHelp from './HomeHelp/HomeHelp'

function Home() {
   return (
      <div className='homePage'>
         <div className="homePage__empty"></div>
         <div className="homePage__container">
            <HomeSlider data={productCategories_data} />
            <HomeBtn content="See More" link={""} />
            <HomeHelp />
         </div>
      </div>
   )
}

export default Home