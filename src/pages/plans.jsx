import Header from "../component/header";
import plan from "../features"
const Plans = () => { 
  
  return ( 
  <>
  <Header img="/images/gym.jpg" title="our membership plans">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quo vel? Atque, aperiam rerum. Aliquam.
  </Header>
  <div className="plans text-white w-[100%] md:w-[90%] lg:w-[80%] mx-auto text-center px-8 md:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-32 ">
    {plan.map((plan) =>{
      const {name,id,desc,features,prize} = plan
      return <card key={id} className="bg-secondarybg2 p-10 rounded-tl-3xl rounded-br-3xl hover:bg-transparent border-4 border-transparent hover:border-4 hover:border-secondarybg4 transition duration-500">
          <h3 className="text-2xl font-bold pb-2 capitalize  text-whitecolor">{name}</h3>
          <p className="text-lightcolor mb-7 text-lg">{desc}</p>
          <h1 className="inline-block text-3xl font-bold text-[#3ae2c6]">{`$${prize}`}</h1><h2 className="inline-block text-lightcolor text-2xl">/mo</h2>
          
          <div className="features mt-7">
               <h3 className="capitalize text-2xl font-medium pb-3 text-whitecolor">features</h3>
               {features.map(({feature,available},index) =>{
                return <p key={index} className={`capitalize pb-2  text-lg ${!available ? "text-[#7777]" : "text-lightcolor"}`}>
                 {feature}
                </p>
               })}
               <button className="w-[100%] bg-[#3ae2c6] text-secondarybg1 text-xl font-bold capitalize px-2 py-2 rounded-sm mt-2 ">choose plan</button>
          </div>
      </card>
    })}
  </div>
  </>
   );
}
 
export default Plans;