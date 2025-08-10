import { buttonText } from "../../data/careers";
import { pages_links } from "../../data/data";
import { filterPageLinksByNames } from "../../utils/arrayUtils";
import "./careers.css"
import CareersGuidePrinciples from "./CareersGuidePrinciples/CareersGuidePrinciples"
import CareersWelcome from "./CareersWelcome/CareersWelcome"
import Btn from "../../components/Buttons/Btn/Btn";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/miscUtils";
import PageTitle from "../../components/PageTitle/PageTitle";

function Careers() {
   const link_obj = filterPageLinksByNames(pages_links, ["Careers"]);
   useEffect(() => {
      scrollToTop();
   }, []);
   return (
      <div className='careersPage'>
         <div className="careersPage__empty"></div>
         <div className="careersPage__container">
            <PageTitle title={"Careers"} />
            <CareersWelcome />
            <CareersGuidePrinciples />
            <Btn content={buttonText} link={link_obj[0].link} />
         </div>
      </div>
   )
}

export default Careers