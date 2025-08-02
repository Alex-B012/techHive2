import './welcomeParagraph.css'

interface WelcomeParagraphProp {
   title?: string;
   text_data?: string[]
}

function WelcomeParagraph({ title, text_data }: WelcomeParagraphProp) {
   return (
      <div className='welcomeParagraph__container'>
         {title && (<h1 className='welcomeParagraph__title'>{title}</h1>)}
         {text_data && (
            <div className='welcomeParagraph__textContainer'>
               {text_data.map((item) => <p className='welcomeParagraph__text'>{item}</p>)}
            </div>
         )}
      </div>)
}

export default WelcomeParagraph