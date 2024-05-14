import { NavLink } from "react-router-dom";
 import {motion} from "framer-motion"
const HeroSection = () => {
  return ( 
    <>
    <div className="relative w-full h-full mt-32 md:mt-0 ">
      <motion.div className="left text-white mt-[10%] w-[100%] md:w-[60%] lg:w-[50%] p-12 lg:pl-24  z-[-5] overflow-hidden"
      initial={{x:'-10vw',opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{delay:0.2,duration:0.5}}
      
      >
        <h4 className="text-primaryColor-100 capitalize mb-4">#100DaysFitness</h4>
        <h1 className=" text-5xl capitalize leading-[3rem]"><span className="text-primaryColor-200 font-bold">make</span><br />your dream <br /> body</h1>
        <p className="text-whitecolor pt-3 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero earum in tenetur, numquam, aliquid incidunt quam, aut doloribus minus non iure voluptates. Saepe rerum rem nobis culpa vitae porro eius?</p>
        <div className="button  mt-6 flex items-center  ">
          <NavLink to="/plans" className="bg-primaryColor-200 px-6 py-2 rounded-lg text-lg font-bold capitalize hover:bg-transparent transition duration-500 hover:border-4 hover:border-secondarybg3 hover:text-whitecolor text-secondarybg4  w-38 block border-4 border-primaryColor-200" >plans</NavLink>
          <NavLink to="/about" className="ml-6  px-6 py-2 border-4 transition duration-500 rounded-lg border-primaryColor-200 hover:bg-primaryColor-200 hover:text-secondarybg4 text-lg capitalize font-bold w-38">about us</NavLink>
        </div>
      </motion.div>

      <div className="right">
        <div className=" "> </div>
        
     <img src="/images/gallery.jpg" alt="" className="absolute h-[calc(100vh-5rem)] overflow-hidden right-0 top-[-3rem]  w-[50%]  z-[-10]  opacity-[0.7]"/>
        </div>

    </div>
    </>
   );
}
 
export default HeroSection;