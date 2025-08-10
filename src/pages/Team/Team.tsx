import { useEffect } from "react";
import InProgressStatement from "../../components/InProgressStatement/InProgressStatement"
import "./team.css"
import { scrollToTop } from "../../utils/miscUtils";
import PageTitle from "../../components/PageTitle/PageTitle";

function Team() {
   useEffect(() => {
      scrollToTop();
   }, []);
   return (
      <div className='teamPage'>
         <div className="teamPage__empty"></div>
         <div className="teamPage__container">
            <PageTitle title={"Our Team"} />
            <InProgressStatement />
         </div>
      </div>
   )
}

export default Team