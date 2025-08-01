import './newsCategoryBtn.css'

interface NewsCategoryBtnProp {
   name: string;
}

function NewsCategoryBtn({ name }: NewsCategoryBtnProp) {
   function chooseNewsCategory(name: string) {
      console.log("cat chosen:", name)
   }

   return (
      <button onClick={() => chooseNewsCategory(name)} className='newsCategoryBtn__btn'>
         {name}
      </button>)
}

export default NewsCategoryBtn