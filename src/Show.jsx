import Cook from "./Cook";




const Show = ({khabar}) => {



    return (
        <div className=" ">
              

              <h1 className=" text-2xl font-bold mt-16 flex justify-center items-center"> Want to cook: {khabar.length}  </h1>

            


              <div className=" flex gap-20 justify-center mt-5">

                 <h1 className=" text-xl font-bold text-slate-400"> Name  </h1>
                 
                 <h1 className=" text-xl font-bold text-slate-400"> time  </h1>
                 
                 <h1 className=" text-xl font-bold text-slate-400"> calories </h1>


              </div>


              {

                khabar.map(khabar => <Cook key={khabar.id} khabar={khabar}></Cook> )



              }
      

            
        </div>
    );
};

export default Show;