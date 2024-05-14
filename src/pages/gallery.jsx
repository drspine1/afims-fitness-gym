import Header from "../component/header";
import data from "../galleery"
const Gallery = () => {

  return ( 
    <>
    <Header img ="/images/gym1.jpg" title="our gallery">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptate exercitationem, quo deserunt deleniti dis
    </Header>

    <div className="w-[80%]  text-center  mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 place-items-center mt-28">
      {data.map((data) =>{
        const {id,image} = data
        return <div key={id}>
               <img src={image} alt="image-gallery" className="w-[25rem] h-[23rem] opacity-80 object-cover rounded-sm  hover:opacity-60 transition duration-500" />
        </div>
      })}
    </div>
    </>
   );
}
 
export default Gallery;