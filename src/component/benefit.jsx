import { NavLink,Link } from "react-router-dom";

const Benefit = () => {
  return ( 
    <>
    <div className="benefits text-white  w-[100%] md:w-[70%] mx-auto  px-8">
      <h2 className="text-2xl text-primaryColor-200 capitalize font-medium pb-12">many bebefits can be taken for you</h2>
      <ul className="mb-10">
       <li className="w-[100%] md:w-[80%] lg:w-[50%]  flex mb-10">
        <h4 className="bg-primaryColor-100 w-24 text-center font-medium  h-10 rounded-full grid place-items-center text-lg">1</h4>
        <p className="ml-6 text-lg text-whitecolor">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis tempore, dolore vitae esse magnam quibusdam!</p>
       </li>
       <li className="w-[100%] md:w-[80%] lg:w-[50%] flex mb-10">
        <h4 className="bg-primaryColor-100 w-24 text-center  h-10 rounded-full grid place-items-center">2</h4>
        <p className="ml-6 text-lg text-whitecolor">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis tempore, dolore vitae esse magnam quibusdam!</p>
       </li>
       <li  className="w-[100%] md:w-[80%] lg:w-[50%] flex mb-10">
        <h4 className="bg-primaryColor-100 w-24 text-center  h-10 rounded-full grid place-items-center">3</h4>
        <p className="ml-6 text-lg text-whitecolor">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis tempore, dolore vitae esse magnam quibusdam!</p>
       </li>
      </ul>
      <Link to="/more" className="bg-primaryColor-100 text-white px-5 py-3 rounded-md capitalize font-medium text-lg ml-16">learn more...</Link>
    </div>
    </>
   );
}
 
export default Benefit;