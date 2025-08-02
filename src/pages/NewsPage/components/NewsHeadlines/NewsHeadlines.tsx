import './newsHeadlines.css'

interface NewsHeadlinesProp {
   title: string;
   subtitle?: string;
}

function NewsHeadlines({ title, subtitle }: NewsHeadlinesProp) {
   return (
      <div className='newsHeadlines__container'>
         <div className="newsHeadlines__title">{title}</div>
         {subtitle && (<div className="newsHeadlines__subtitle">{subtitle}</div>)}
      </div>
   )
}

export default NewsHeadlines