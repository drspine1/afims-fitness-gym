import { IoFlower } from "react-icons/io5";
import { GiHeartInside } from "react-icons/gi";
import { GiWrappedSweet } from "react-icons/gi";
import { motion} from "framer-motion"

const Container ={
  hidden:{
    opacity:0,
    y:'40%'
  },
  animate:{
   opacity:1,
   y:'0%',
   transition:{
    duration:2,
    delay:'0.5s',
    type:'tween',
    staggerChildren:1
   }
  }
  
}
const Join = () => {
  return ( 
    <>
    <motion.div className="join-section mt-52 mx-auto text-center px-6 md:px-40"
  
   initial={{opacity:0, y:'45px'}}
   whileInView={{opacity:1, y:0 }}
   transition={{delay:0.2, duration:0.3,staggerChildren:2}}
   viewport={{once:true, amount:0.4 }}
    >
      <h2 className="text-3xl font-bold text-whitecolor capitalize"><span className=" text-primaryColor-200 ">/</span> why you should join us </h2>
      <h4 className="text-primaryColor-100 pt-3">Best gym center in the city</h4>
      <div className="join-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 mb-6">
        <div className="join bg-secondarybg4 p-6 rounded-lg hover:bg-transparent hover:border-4 hover:border-secondarybg4 border-4 border-transparent">
             <IoFlower className="mx-auto text-primaryColor-200 text-5xl mb-3"/>
             <h3 className="text-whitecolor text-lg font-bold capitalize pb-4">yoga</h3>
             <p className="text-lightcolor text-lg">keep your body in a great shape with a bit of extra attention with kegel exercise</p>
        </div>
        <div className="join bg-secondarybg4 p-6 rounded-lg hover:bg-transparent hover:border-4 hover:border-secondarybg4 border-4 border-transparent">
        <GiHeartInside className="mx-auto text-primaryColor-200 text-5xl mb-3"/>
             <h3 className="text-whitecolor text-lg font-bold capitalize pb-4">fitness</h3>
             <p className="text-lightcolor text-lg">keep your body in a great shape with a bit of extra attention with kegel exercise</p>
        </div>
        <div className="join bg-secondarybg4 p-6 rounded-lg hover:bg-transparent hover:border-4 hover:border-secondarybg4 border-4 border-transparent">
        <GiWrappedSweet className="mx-auto text-primaryColor-200 text-5xl mb-3"/>
             <h3 className="text-whitecolor text-lg font-bold capitalize pb-4">treatment</h3>
             <p className="text-lightcolor text-lg">keep your body in a great shape with a bit of extra attention with kegel exercise</p>
        </div>
      </div>

      
    </motion.div>
    </>
   );
}
 
export default Join;