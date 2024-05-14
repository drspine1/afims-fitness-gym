import { Link, NavLink } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { HiMenuAlt1 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia"; 
import { useState } from "react";

const Navbar = () => {
  const[showNav,setShowNav] = useState(false)
  const navActive = ' bg-primaryColor-200 p-2 rounded-lg'
  const note = ""
  return ( 
    <>
    <nav className="bg-secondarybg2 fixed   top-0 left-0 w-full flex items-center justify-between p-8 h-[5rem] z-50">
      <div className="logo shadow-md">
     <h1 className="text-2xl md:text-3xl uppercase font-bold text-whitecolor">i-fitness <span className="text-primaryColor-200">gym</span></h1>
      </div>
      <ul className="hidden lg:block">
        <NavLink to="/"className={({isActive}) => isActive ? navActive : note}><p className="text-2xl font-medium capitalize mx-4 text-whitecolor  inline-block">home</p></NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? navActive : note}><p className="text-2xl font-medium capitalize mx-4 text-whitecolor transition duration-500 inline-block">About</p></NavLink>
        <NavLink to="/gallery" className={({isActive}) => isActive ? navActive : note}><p className="text-2xl font-medium capitalize mx-4 text-whitecolor  transition duration-500 inline-block">Gallery</p></NavLink>
        <NavLink to="/plans" className={({isActive}) => isActive ? navActive : note}><p className="text-2xl font-medium capitalize mx-4 text-whitecolor  transition duration-500 inline-block">Plans</p></NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? navActive : note}><p className="text-2xl font-medium capitalize mx-4 text-whitecolor  transition duration-500 inline-block">contact</p></NavLink>
      </ul>

      <ul className={` nav z-50 lg:hidden absolute p-6 pt-8 bg-primaryColor-100 left-0 top-[100%] w-4/6 h-screen transition duration-500 ${showNav ?"ml-0":"ml-[-100%]"}`}>
        <NavLink activeClass='active' to="/" className="text-2xl font-medium capitalize mx-4 text-whitecolor  transition duration-500 block pb-4" onClick={()=> setShowNav(false)}>home</NavLink>
        <NavLink activeClass='active' to="/about" className="text-2xl font-medium capitalize mx-4 text-whitecolor  block pb-4" onClick={()=> setShowNav(false)}>about</NavLink>
        <NavLink activeClass='active' to="/gallery" className="text-2xl font-medium capitalize mx-4 text-whitecolor  block pb-4" onClick={()=> setShowNav(false)}>gallery</NavLink>
        <NavLink activeClass="active" to="/plans" className="text-2xl font-medium capitalize mx-4 text-whitecolor  block pb-4" onClick={()=> setShowNav(false)}>plans</NavLink>
        <NavLink activeClass='active' to="/contact" className="text-2xl font-medium capitalize mx-4 text-whitecolor  block pb-4" onClick={()=> setShowNav(false)}>contact</NavLink>
      </ul>
      <ul className="socials hidden lg:flex">
           <Link className="mx-2"><FaSquareXTwitter className="text-2xl text-primaryColor-200 hover:text-whitecolor hover:transform hover:-translate-y-1 transition duration-500"/></Link>
           <Link className="mx-2"><FaFacebookMessenger className="text-2xl text-primaryColor-200 hover:text-whitecolor hover:transform hover:-translate-y-1 transition duration-500"/></Link>
           <Link className="mx-2"><IoLogoWhatsapp className="text-2xl text-primaryColor-200 hover:text-whitecolor hover:transform hover:-translate-y-1 transition duration-500"/></Link>
           <Link className="mx-2"><RiInstagramFill className="text-2xl text-primaryColor-200 hover:text-whitecolor hover:transform hover:-translate-y-1 transition duration-500"/></Link>
      </ul>

      <button className="block  border-2 border-primaryColor-200  lg:hidden" onClick={() => setShowNav(!showNav)}>
        {showNav ?<LiaTimesSolid className="text-whitecolor text-4xl"/>:<HiMenuAlt1 className="text-whitecolor text-4xl"/>}
  
      </button>
    </nav>
    </>
   );
}
 
export default Navbar;