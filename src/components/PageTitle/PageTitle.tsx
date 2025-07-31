import "./pageTitle.css"

interface PageTitleProps {
   title: string;
   title_pos?: string;
}

function PageTitle({ title, title_pos = "" }: PageTitleProps) {
   let position = "";
   if (title_pos === "c") position = "pageTitle_text-center";
   if (title_pos === "r") position = "pageTitle_text-right";
   return (
      <div className="pageTitle_container">
         < h1 className={`pageTitle_title ${position}`}> {title}</ h1 >
      </div>
   )
}

export default PageTitle