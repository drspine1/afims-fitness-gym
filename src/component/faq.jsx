import { useState } from "react";
import questions from "../faqs"
import List from "./list";
const Faq = () => {
  const[people,setPeople] = useState(questions)
  console.log(questions)
  return ( 
    <>
    <div className="w-[85%] md:w-[80%] lg:w-[50%] mx-auto text-center mt-28">
      <h2  className="text-3xl font-bold text-whitecolor capitalize pb-8"><span className=" text-primaryColor-200 ">/</span> people ask...</h2>
      <List people={people} />
    </div>
    </>
   );
}
 
export default Faq;