import { motion } from "framer-motion";
const AboutList = () => {
  return ( 
    <>
<div className="about-container w-[90%] md:w-[90%] mx-auto text-center mt-32 px-2">
  <section className="our-story flex flex-col-reverse md:flex-row justify-between gap-[5%] mb-40 grid-rows-1">
    <div 
      

    className="story-image flex-[47.5%] mt-28 md:mt-0">
      <img src="/images/mammma.jpg" alt="avatar" className="rounded-md border-8 shadow-2xl w-full md:h-[50vh]  border-secondarybg3"/>
    </div>
    <div className="story-content flex-[47.5%]">
      <h2  className="text-3xl font-bold text-whitecolor capitalize pb-8"><span className=" text-primaryColor-200 ">our</span> story</h2>
      <p className="text-lg text-lightcolor text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium labore tempore? Quo maxime beatae eligendi! Natus, totam maxime. Repellendus similique dolorum animi qui itaque?</p>
      <p className="text-lg text-lightcolor text-left pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto, adipisci magni, inventore autem sit a exercitationem minima libero eaque porro aliquam veritatis eius maxime?</p>
    </div>
  </section>
  <section className="our-mission flex flex-col  md:flex-row justify-between gap-[5%] mb-40">
  <motion.div 
     initial={{opacity:0, y:'25px'}}
     whileInView={{opacity:1, y:0 }}
     transition={{delay:0.4, duration:0.3,staggerChildren:2}}
     viewport={{once:true, amount:0.4 }}
  className="mission-content flex-[47.5%] mb-28 md:mb-0">
      <h2  className="text-3xl font-bold text-whitecolor capitalize pb-8"><span className=" text-primaryColor-200 ">our</span> mission</h2>
      <p className="text-lg text-lightcolor text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium labore tempore? Quo maxime beatae eligendi! Natus, totam maxime. Repellendus similique dolorum animi qui itaque?</p>
      <p className="text-lg text-lightcolor text-left pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto, adipisci magni, inventore autem sit a exercitationem minima libero eaque porro aliquam veritatis eius maxime?</p>
    </motion.div>
    <motion.div 
       initial={{opacity:0, y:'25px'}}
       whileInView={{opacity:1, y:0 }}
       transition={{delay:0.2, duration:0.3,staggerChildren:2}}
       viewport={{once:true, amount:0.4 }}
    className="mission-image flex-[47.5%]">
      <img src="/images/mission.jpg" alt="avatar" className="rounded-md border-8 shadow-2xl border-secondarybg3 md:h-[50vh]"/>
    </motion.div>
  </section>
  <section className="our-vission flex justify-between flex-col-reverse md:flex-row  gap-[5%] mb-40 grid-rows-1"> 
     <motion.div 
        initial={{opacity:0, y:'25px'}}
        whileInView={{opacity:1, y:0 }}
        transition={{delay:0.2, duration:0.3,staggerChildren:2}}
        viewport={{once:true, amount:0.4 }}
     className="vission-image flex-[47.5%] mt-28 md:mt-0">
      <img src="/images/vission.jpg" alt="avatar" className="rounded-md border-8 shadow-2xl border-secondarybg3 md:h-[50vh]"/>
    </motion.div>
    <motion.div 
       initial={{opacity:0, y:'25px'}}
       whileInView={{opacity:1, y:0 }}
       transition={{delay:0.4, duration:0.3,staggerChildren:2}}
       viewport={{once:true, amount:0.4 }}
    className="vission-content flex-[47.5%]">
      <h1  className="text-3xl font-bold text-whitecolor capitalize pb-8"><span className=" text-primaryColor-200 ">our</span> vission</h1>
      <p className="text-lg text-lightcolor text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium labore tempore? Quo maxime beatae eligendi! Natus, totam maxime. Repellendus similique dolorum animi qui itaque?</p>
      <p className="text-lg text-lightcolor text-left pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto, adipisci magni, inventore autem sit a exercitationem minima libero eaque porro aliquam veritatis eius maxime?</p>
    </motion.div>
   
  </section>
  <section className="  our-objective flex justify-between flex-col md:flex-row gap-[5%] mb-40 ">
 
    <motion.div 
       initial={{opacity:0, y:'25px'}}
       whileInView={{opacity:1, y:0 }}
       transition={{delay:0.4, duration:0.3,staggerChildren:2}}
       viewport={{once:true, amount:0.4 }}
    className="objective-content flex-[47.5%] mb-28 md:mb-0">
      <h2  className="text-3xl font-bold text-whitecolor capitalize pb-8"><span className=" text-primaryColor-200 ">our</span> objective</h2>
      <p className="text-lg text-lightcolor text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium labore tempore? Quo maxime beatae eligendi! Natus, totam maxime. Repellendus similique dolorum animi qui itaque?</p>
      <p className="text-lg text-lightcolor text-left pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto, adipisci magni, inventore autem sit a exercitationem minima libero eaque porro aliquam veritatis eius maxime?</p>
    </motion.div>
    <motion.div 
       initial={{opacity:0, y:'25px'}}
       whileInView={{opacity:1, y:0 }}
       transition={{delay:0.2, duration:0.3,staggerChildren:2}}
       viewport={{once:true, amount:0.4 }}
    className="objective-image flex-[47.5%]">
      <img src="/images/ojective.jpg" alt="avatar"  className="rounded-md border-8 shadow-2xl border-secondarybg3 md:h-[50vh]"/>
    </motion.div>
  </section>
</div>
    </>
   );
}
 
export default AboutList;