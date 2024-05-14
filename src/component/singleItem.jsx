import { useState } from "react";

const SingleItem = ({question,answer,id}) => {
  const[show,setShow] = useState(false)
  return ( 
    
    <>
    <div className="mb-4">
      <div className="flex justify-between items-center bg-secondarybg2  p-5 px-6 mb-1 text-2xl font-medium cursor-pointer" onClick={() =>setShow(!show)}>
      <h3 className="text-lg md:text-[1.4rem] text-whitecolor text-left md:text-center">{question}</h3>
      <button className="text-3xl font-bold text-primaryColor-200">
        {show ? "-":"+"}
        </button>
      </div>
     
      <p className={`bg-secondarybg2 text-lightcolor text-lg md:text-[1.3rem] text-left md:text-center ${show ? "block p-6" :" hidden overflow-hidden"}`}>{answer}</p>
    </div>
    </>
   );
}
 
export default SingleItem;