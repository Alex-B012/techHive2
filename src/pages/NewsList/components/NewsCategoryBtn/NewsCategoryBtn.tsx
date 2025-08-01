import './newsCategoryBtn.css'

interface NewsCategoryBtnProp {
   name: string;
}

function NewsCategoryBtn({ name }: NewsCategoryBtnProp) {
   function chooseNewsCategory() { }

   return (<div onClick={chooseNewsCategory}> {name} </div>)
}

export default NewsCategoryBtn