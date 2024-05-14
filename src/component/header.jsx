import {motion} from 'framer-motion'
const headeraVariant={
  hidden:{y:'50px' ,opacity:0},
  visible:{y:0, opacity:1,
    transition:{
      duration:0.5,
       ease:'easeIn',
       when:'beforechildren',
       mass:0.8,
       type:'tween',
       damping:8
    }
  }
 
}
const Header = ({img,title,children}) => {
  return ( 
    <>
   <div className="w-full h-[20rem] mt-[5rem] overflow-hidden ">
    <div className="h-[100%] w-[100%] bg-black grid place-items-center relative ">
    <div className="img w-full h-full absolute">
      <img src={img} alt="about image" className="w-full h-full opacity-40" />
    </div>
    <motion.div className="content text-white mx-auto text-center text-lg p-4 w-[100%] md:w-[70%]"
    
    variants={headeraVariant}
    initial="hidden"
    animate="visible"
    
    >
      <h2  className="text-3xl font-bold text-white capitalize pb-8"><span className=" text-primaryColor-200 ">/</span> {title}</h2>
      <motion.p className="text-2xl text-[#b8b4b4]"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeIn', delay:'0.3'}}
      >{children}</motion.p>
    </motion.div>
    </div>

   </div>
    </>
   );
}
 
export default Header;