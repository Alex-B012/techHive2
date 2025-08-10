import "./home.css"
import HomeSlider from './HomeSlider/HomeSlider'
import { productCategories_data } from '../../data/pricing/pr_productCategories'
import { pages_links } from "../../data/data"
import { filterPageLinksByNames } from "../../utils/arrayUtils"

import Btn from '../../components/Buttons/Btn/Btn'
import HomeHelp from './HomeHelp/HomeHelp'

function Home() {
   const link_obj = filterPageLinksByNames(pages_links, ["Pricing"]);

   return (
      <div className='homePage'>
         <div className="homePage__empty"></div>
         <div className="homePage__container">
            <HomeSlider data={productCategories_data} />
            <Btn content="See More" link={link_obj[0].link} />
            <HomeHelp />
         </div>
      </div>
   )
}

export default Home