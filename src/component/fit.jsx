import { NavLink } from "react-router-dom";
import {motion} from "framer-motion"
const Fit = () => {
  return ( 
    <>
    <div className="w-[100%] md:w-[80%] mx-auto text-center flex flex-col md:flex-row items-start gap-4 mt-16 pb-14">
      <div className="fit-img">
        <img src="/images/gym.jpg" alt=""  className="w-[100rem] flex-1"/>
      </div>
      <motion.div 
      initial={{opacity:0, y:'45px '}}
      whileInView={{opacity:1, y:0}}
      transition={{delay:0.3, duration:0.3}}
      viewport={{once:true, amount:0.2 }}
      
      
      className="fit-content ml-0 md:ml-5 mt-8 md:mt-0 px-4 " 
     
      >
        <h3 className="text-2xl capitalize font-bold text-primaryColor-200
        pb-3">stay fit stay healthy</h3>
        <p className="text-lg text-lightcolor pb-10 text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, deleniti. Vitae est laborum non magni, fugit totam exercitationem id voluptatem debitis laboriosam quos optio sequi nam eaque aut at atque?</p>
        <NavLink to="/plans" className="bg-primaryColor-100 p-3 capitalize  font-bold rounded-md text-secondarybg2 hover:text-whitecolor hover:opacity-90 transition duration-500 ">get started</NavLink>
      </motion.div>
    </div>
    </>
   );
}
 
export default Fit;