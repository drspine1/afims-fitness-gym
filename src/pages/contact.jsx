import Header from "../component/header";

const Contact = () => {
  return ( 
    <>
    <Header img="/images/gym.jpg" title="get in touch">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam quae dolore voluptate, quidem ullam.
    </Header>

    <div className="contact mt-40 mx-auto text-center w-[90%] sm:w-[70%] lg:w-[50%] grid place-items-centershadow-xl px-2 sm:px-0">
      <form  className="w-full">
        <input type="text " name="name"  placeholder="Enter your name" className="block w-full mb-10 p-8  bg-whitecolor rounded-sm outline-0 shadow-xl placeholder:text-lg"/>
        <input type="email" name="email" placeholder="Email Id" className="block w-full mb-10 p-8  bg-whitecolor rounded-sm outline-0 shadow-xl placeholder:text-lg"/>
        <textarea name="messahe" placeholder="Your message here" className="block w-full mb-10 p-8  bg-whitecolor rounded-sm outline-0 shadow-xl placeholder:text-lg"></textarea>

        <button type="submit" className="bg-primaryColor-100 px-10 py-3 text-whitecolor text-lg font-bold capitalize rounded-md hover:opacity-70 transition duration-500">submit</button>
      </form>
    </div>
    </>
   );
}
 
export default Contact;