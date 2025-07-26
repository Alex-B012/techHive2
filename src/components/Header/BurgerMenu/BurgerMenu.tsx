import "./burgerMenu.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { burgerBtns } from "../../../data/data"

interface BurgerMenuProps {
   state: boolean;
   toggleMenuFunc: () => void;
}

function BurgerMenu({ state, toggleMenuFunc }: BurgerMenuProps) {
   return (
      <div className='header__burger'>
         <button onClick={toggleMenuFunc} className='header__burger-btn'><FontAwesomeIcon icon={!state ? burgerBtns[0].icon : burgerBtns[1].icon} className="header__closeBtn" /></button>
      </div>
   )
}

export default BurgerMenu