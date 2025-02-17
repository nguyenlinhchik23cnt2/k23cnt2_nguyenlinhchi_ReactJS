import NLCJsxExpression from "./components/nlcJsxExpression";
import NLCFuncComp from "./components/nlcFuncComp";
import NLCClassComp from "./components/nlcclassComp";

function NLCApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Lesson03 - Nguyễn Linh Chi </h1>

      <NLCJsxExpression/>
      <hr/>
      <NLCFuncComp />
      <hr/>
      <NLCClassComp/>
      

    </div>
  );
}

export default NLCApp;
