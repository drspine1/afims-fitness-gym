import AboutList from "../component/aboutList";
import Benefit from "../component/benefit";
import Coaches from "../component/coaches";
import Header from "../component/header";

const About = () => {
  return (  
    <>
    <div className="">
    <Header img="/images/gym02.jpg" title="about us">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum eligendi sapiente. Eos, a culpa.
    </Header>
     <AboutList/>
     <Coaches/>
     <Benefit/>
    </div>

    </>
  );
}
 
export default About;