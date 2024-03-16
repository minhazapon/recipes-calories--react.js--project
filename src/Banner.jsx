

import '../public/images/c2.jpg'




const Banner = () => {
    return (
        <div>

              <div className=' ml-10 mr-10 mt-10'>

              <div className="hero min-h-screen" style={{backgroundImage: 'url(public/images/c2.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking<br></br> class tailored for you!</h1>
                    <p className="mb-5 text-2xl"> A great chef is an artist that I truly respect.<br></br> If you're a happy person around food, you can be a professional chef </p>
        
                    <div className=' flex gap-5 items-center justify-center mt-5 '>
                    <button className=' btn bg-green-500 rounded-2xl text-white'>Explore Now</button> 
           
                     <button className=' border-[1px] rounded-2xl p-3 btn'>Our Feedback</button> 
                
                     </div>  
                    
                  </div>
                </div>
              </div>

              </div>



            
        </div>
    );
};

export default Banner;