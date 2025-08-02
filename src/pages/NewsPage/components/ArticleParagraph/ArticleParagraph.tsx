import './articleParagraph.css'

interface ArticleParagraphProp {
   text: string;
}

function ArticleParagraph({ text }: ArticleParagraphProp) {
   return (
      <p className='articleParagraph__text'>{text}</p>
   )
}

export default ArticleParagraph