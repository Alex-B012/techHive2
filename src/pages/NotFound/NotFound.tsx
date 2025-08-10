import { useEffect } from "react";
import "./notFound.css"
import { scrollToTop } from "../../utils/miscUtils";

function NotFound() {
   useEffect(() => {
      scrollToTop();
   }, []);
   return (
      <div className='notFoundPage'>
         <div className="notFoundPage__empty"></div>
         <div className="notFoundPage__container">

            Oh, something went wrong!
            <br />
            <br />
            <br />
         </div>
      </div>
   )
}

export default NotFound