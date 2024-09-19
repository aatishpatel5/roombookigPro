 "use client"
 
import CountUpNumber from "../CountUpNumber/CountUpNumber" 

 
const ClientComponent = ()=> {  
  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
      <div className="py-10 h-full"> 

        <h1 className="font-heading mb-6">Explore Our Exquisite Hotel</h1>
        <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg">
          Experience an Exquisite Hotel Immersed in Rich History and also
          Timeless Elegance.
        </p>
     
        <div className="flex justify-between mt-12">
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-center">Basic Room</p>
            <CountUpNumber duration={3000} endValue={50} />
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-center">Luxury Room</p>
            <CountUpNumber duration={3000} endValue={70} />
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-center">Suite</p>
            <CountUpNumber duration={3000} endValue={40} />
          </div>
        </div>
      </div> 
    </section>
  )
}

export default ClientComponent


 