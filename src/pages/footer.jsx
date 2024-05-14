import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return ( 
    <>
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-7 md:p-16   bg-secondarybg4  mt-32 mx-auto text-center">
      <div className=" mt-4">
        <h1 className="pb-4 uppercase text-2xl font-medium text-whitecolor">i-fitness <span className="text-primaryColor-100">gym</span></h1>
        <p className="text-lightcolor  text-lg font-medium pb-2 w-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, rem reiciendis vero rerum est cumque provident animi aperiam molestiae voluptas.</p>
        <div className="socials flex mt-3 mx-auto text-center justify-center"  >
            <FaSquareXTwitter  className="text-2xl text-whitecolor hover:text-whitecolor hover:transform hover:-translate-y-1 transition duration-500 mx-2"/>
            <FaFacebookMessenger  className="text-2xl text-whitecolor hover:text-whitecolor hover:transform hover:-translate-y-1 transition duration-500 mx-2"/>
            <IoLogoWhatsapp  className="text-2xl text-whitecolor hover:text-whitecolor hover:transform hover:-translate-y-1 transition duration-500 mx-2"/>
            <RiInstagramFill  className="text-2xl text-whitecolor hover:text-whitecolor hover:transform hover:-translate-y-1 transition duration-500 mx-2"/>
        </div>
       
      </div>

      <div className="md:ml-14 mt-4">
        <h2 className="pb-4 capitalize text-2xl font-medium text-whitecolor">permalinks</h2>
        <ul>
          <li className="text-lightcolor capitalize text-lg font-medium pb-2">home</li>
          <li className="text-lightcolor capitalize text-lg font-medium pb-2">about</li>
          <li className="text-lightcolor capitalize text-lg font-medium pb-2">gallery</li>
          <li className="text-lightcolor capitalize text-lg font-medium pb-2">plans</li>
          <li className="text-lightcolor capitalize text-lg font-medium pb-2">contact</li>
    
        </ul>
      </div>

      <div className="md:ml-10 mt-4">
        <h1 className="pb-4 capitalize text-2xl font-medium text-whitecolor">insights</h1>
        <ul>
          <li className="text-lightcolor capitalize text-lg font-medium pb-2">blogs</li>
          <li className="text-lightcolor capitalize text-lg font-medium pb-2">events</li>
          <li className="text-lightcolor capitalize text-lg font-medium pb-2">communities</li>
          <li className="text-lightcolor capitalize text-lg font-medium pb-2">case studies</li>
          <li className="text-lightcolor capitalize text-lg font-medium pb-2">FAQs</li>
        </ul>
      </div>

      <div className="md:ml-10 mt-4">
        <h2 className="pb-4 capitalize text-2xl font-medium text-whitecolor">Get in Touch</h2>
        <h4 className="text-lightcolor capitalize text-lg font-medium pb-2">contact us </h4>
        <h4 className="text-lightcolor capitalize text-lg font-medium pb-2">support</h4>
       
      </div>
     
    
    </div>
    
    </>
   );
}
 
export default Footer;