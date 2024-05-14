import { GiGymBag } from "react-icons/gi";
import { MdSportsGymnastics } from "react-icons/md";
import { SiInstructure } from "react-icons/si";
import { MdCardMembership } from "react-icons/md";
import Fit from "./fit";

const Facility = () => {
  return ( 
    <>
    <div className="facilities bg-secondarybg3 mx-auto text-center mt-44 shadow-xlg pt-12">
      <h2  className="text-3xl font-bold text-whitecolor capitalize pb-3"><span className=" text-primaryColor-200 ">/</span> facilities we offer</h2>
      <div className="facilities-div  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
          <div className="facility text-left bg-purple-100 p-6 rounded hover:transform hover:scale-[1.1] ">
              <MdSportsGymnastics className="mx-auto text-5xl text-[#d56b61]"/>
              <h4 className="text-2xl capitalize font-bold py-3">gym instructor</h4>
              <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam velit ad deleniti, ab enim ipsum.</p>
          </div>
          <div className="facility text-left bg-[#00f7ff] p-6 rounded hover:transform hover:scale-[1.1]">
          <SiInstructure className="mx-auto text-5xl text-[#4352fc]"/>
              <h4 className="text-2xl capitalize font-bold py-3">gym floor</h4>
              <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam velit ad deleniti, ab enim ipsum.</p>
          </div>
          <div className="facility text-left bg-[pink] p-6 rounded hover:transform hover:scale-[1.1]">
          <MdCardMembership className="mx-auto text-5xl text-[orangered]"/>
              <h4 className="text-2xl capitalize font-bold py-3">gym menbership</h4>
              <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam velit ad deleniti, ab enim ipsum.</p>
          </div>
          <div className="facility text-left bg-[cornsilk] p-6 rounded hover:transform hover:scale-[1.1]">
          <GiGymBag className="mx-auto text-5xl text-[#851785]"/>
              <h4 className="text-2xl capitalize font-bold py-3">gym flexible location</h4>
              <p className="text-lg ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam velit ad deleniti, ab enim ipsum.</p>
          </div>
      </div>
      <Fit/>
    </div>
    </>
   );
}
 
export default Facility;