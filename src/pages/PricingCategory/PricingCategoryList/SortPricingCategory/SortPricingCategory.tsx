import './sortPricingCategory.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sortingIcons } from '../../../../data/data'
import { useState } from 'react';

interface SortPricingCategoryProp {
   value: {
      value: string;
      valueFunc: (newValue: string) => void;
   };
   sortOrder: {
      sortOrder: boolean;
      sortOrderFunc: (newOrder: boolean) => void;
   };
}

function SortPricingCategory({ value, sortOrder }: SortPricingCategoryProp) {
   const [currentSortType, setCurrentSortType] = useState('price');

   const handleSortTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCurrentSortType(e.target.value);
      value.valueFunc(e.target.value);
   };

   return (
      <div className="sortPricingCategory__container">
         <span className='sortPricingCategory__title'>Sort:</span>
         <div>
            <select
               className="sortPricingCategory__select"
               value={currentSortType}
               onChange={handleSortTypeChange}
            >
               <option value="price">by price</option>
               <option value="name">by name</option>
               <option value="brand">by brand</option>
            </select>
         </div>
         <button
            className="sortPricingCategory__btn"
            onClick={() => sortOrder.sortOrderFunc(!sortOrder.sortOrder)}
         >
            <FontAwesomeIcon
               icon={value.value === 'price' ? sortingIcons.stepsIcon : sortingIcons[sortOrder.sortOrder ? 'zaIcon' : 'azIcon']}
               className={`sortPricingCategory__sortIcon ${sortOrder.sortOrder && value.value !== 'name' ? 'sortPricingCategory__sortIcon-mirror' : ''}`}
            />
         </button>
      </div>
   );
}

export default SortPricingCategory
