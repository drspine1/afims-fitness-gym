import benefits from "../moreData"
import {motion} from'framer-motion'
const More = () => {
  console.log(benefits)
  return (
    <>
    
   <motion.div className="more grid place-items-center mx-auto text-center w-[100%] sm:w-[90%] lg:w-[80%] mt-40  px-6"
   
   initial={{opacity:0}}
   animate={{opacity:1}}
   transition={{delay:0.4,duration:0.5}}
   >
   <h2 className="text-2xl text-primaryColor-200 capitalize font-medium pb-12 text-left">many bebefits for you</h2>
    <ul className="more-content grid gap-10 grid-cols-1 sm:grid-cols-2">
      {benefits.map((ben) =>{
        const {id,digit,benefit}=ben 
        return <li key={id} className="w-[100%] md:w-[100%]  flex mb-4 bg-secondarybg2 p-6 rounded-xl border-4 border-transparent hover:border-4 hover:border-secondarybg2 hover:bg-transparent transition duration-500">
         <h4 className="bg-primaryColor-100 w-40 text-center font-medium  h-10 rounded-full grid place-items-center text-lg">{digit}</h4>
         <p className="ml-6 text-lg text-whitecolor text-left">{benefit}</p>
        </li>
      })}
    </ul>
   </motion.div>

   
    </>
    );
}
 
export default More;