import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import person from "../trainners"
import {motion} from 'framer-motion'
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css'
import 'swiper/css/pagination';

const Coaches = () => {
console.log(person)
return ( 
<>
<motion.div className="coach-container w-[100%] px-4 md:w-[80%] mx-auto text-center grid place-items-center mb-32"
initial={{y:'60px',opacity:0}}
whileInView={{y:0,opacity:1}}
transition={{delay:0.4, duration:0.5, ease:'easeInOut'}}
viewport={{once:true, amount:0.2 }}
>
<h2 className="text-3xl font-bold text-whitecolor capitalize pb-8"><span className=" text-primaryColor-200 ">our</span> trainers</h2>
<Swiper className="w-[100%] sm:w-[80%] lg:w-[60%] mx-auto text-center h-full pb-[3rem]"
// install Swiper modules
modules={[ Pagination]}
spaceBetween={40}
slidesPerView={1}
navigation
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}
onSwiper={(swiper) => console.log(swiper)}
onSlideChange={() => console.log('slide change')}
>
{person.map((pesin) =>{
const {img,id,post,name}= pesin

return <SwiperSlide key={id} className="bg-secondarybg2      rounded-2xl py-6 ">
  <img src={img} alt={name}  className="w-[16rem] h-[16rem]  block mx-auto rounded-full   border-4 border-lightcolor  "/>
    <h4 className="pt-2 text-lg capitalize font-medium text-whitecolor">{name}</h4>
    <small className="text-primaryColor-200 text-lg  font-medium ">{post}</small>
  
    <ul className="socials flex justify-center mt-2">
    <li className="bg-lightcolor p-1 hover:bg-transparent hover:border2 hover:border-secondarybg4 border-2 border-transparent transition duration-500 rounded-md mx-1"><FaFacebookMessenger className="text-2xl text-whitecolor"/></li>
        <li className="bg-lightcolor p-1 hover:bg-transparent hover:border2 hover:border-secondarybg4 border-2 border-transparent transition duration-500 rounded-md mx-1"><FaSquareXTwitter className="text-2xl text-whitecolor"/></li>
      <li className="bg-lightcolor p-1 hover:bg-transparent hover:border2 hover:border-secondarybg4 border-2 border-transparent transition duration-500 rounded-md mx-1"><IoLogoWhatsapp className="text-2xl text-whitecolor"/></li>
      <li className="bg-lightcolor p-1 hover:bg-transparent hover:border2 hover:border-secondarybg4 border-2 border-transparent transition duration-500 rounded-md mx-1"><RiInstagramFill className="text-2xl text-whitecolor"/></li>

    </ul>

</SwiperSlide>
})}
</Swiper>

</motion.div>

</>
);
}

export default Coaches;