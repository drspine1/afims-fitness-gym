import { useState } from "react";
import data from "../data"
import {motion} from "framer-motion"
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
const Testimonial = () => {
const[count,setCount] = useState(0)
 const {job,article,name,img} = data[count]

 const checkNumber = (number)=>{
          if(number > data.length -1){
            return 0
          } else if (number < 0){
            return data.length-1
          }else return number
 }
 const nextPerson = () =>{
  setCount((index) =>{
    let newIndex = index +1
    return checkNumber(newIndex)
  })
 }

 const prevPerson = () =>{
  setCount((index) =>{
    let newIndex = index -1
    return checkNumber(newIndex)
  })
 }
  return ( 
    <>
    <motion.div 
    className="w-full md:w-[80%] lg:w-[50%] mx-auto text-center mt-44 px-6"
    
    initial={{ opacity:0}}
    whileInView={{ opacity:1}}
    transition={{delay:0.4,duration:0.5, ease:'easeIn'}}
    viewport={{once:true, amount:0.2 }}
    >
  <h2 className="text-3xl font-bold text-whitecolor capitalize pb-14"><span className=" text-primaryColor-200 ">/</span> Testimonial</h2>
    <div>
      <img src={img} alt="" className="w-32 rounded-full h-32 object-cover mx-auto mb-6"/>
      <h3 className="text-lg text-whitecolor capitalize font-medium">{name}</h3>
      <h1 className="text-lg text-primaryColor-200 capitalize pt-2 font-medium ">{job}</h1>
      <p className="text-lg text-lightcolor">{article}</p>
    </div>
    <div className="buttons flex gap-5 justify-center py-5">
      <button className="bg-whitecolor px-4 py-1 text-secondarybg1 capitalize font-medium text-lg rounded hover:transform hover:scale-[1.1] transition duration-500" onClick={prevPerson}>< HiArrowNarrowLeft/></button>
      <button className="bg-whitecolor px-4 py-1 text-secondarybg1 capitalize font-medium text-lg rounded hover:transform hover:scale-[1.1] transition duration-500" onClick={nextPerson}>< HiArrowNarrowRight/></button>
    </div>
    </motion.div>
  
    </>
   );
}
 
export default Testimonial;