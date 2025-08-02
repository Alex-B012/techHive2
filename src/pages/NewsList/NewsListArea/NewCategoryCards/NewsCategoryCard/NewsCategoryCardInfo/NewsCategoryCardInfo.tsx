import './newsCategoryCardInfo.css'

interface NewsCategoryCardInfoProp {
   title: string;
   author: string;
   date: string;
   category: string;
}

function NewsCategoryCardInfo({ title, author, date, category }: NewsCategoryCardInfoProp) {
   return (
      <div className="newsCategoryCardInfo__container">
         <h4 className="newsCategoryCardInfo__title">{title}</h4>
         <p className="newCategoryCardInfo__info"><span>{`${author}`}</span><span>, </span><span>{` ${date}`}</span></p>
         <p className="newsCategoryCardInfo__category">{category}</p>
      </div>
   )
}

export default NewsCategoryCardInfo