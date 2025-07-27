import React from 'react'
import "./home.css"
import Slider from '../../components/Slider/Slider'
import { productCategories_data } from '../../data/productCategories'

import HomeBtn from './HomeBtn/HomeBtn'
import HomeHelp from './HomeHelp/HomeHelp'

function Home() {
   return (
      <div className='homePage'>
         {/* <Slider data={productCategories_data} /> */}
         <Slider />
         <HomeBtn content="See More" link={""} />
         <HomeHelp />
      </div>
   )
}

export default Home