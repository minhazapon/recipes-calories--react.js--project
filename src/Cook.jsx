



const Cook = ({khabar}) => {

     const {name, time, calories} = khabar

    return (
        <div>

               <div className=" flex gap-16 text-xl text-slate-400 items-center bg-slate-200 mt-3 p-2 rounded-xl">


                 <h1>1</h1>

                <h1> {name}  </h1>
                <h1> {time} </h1>

                <h1> {calories} </h1>

                <button className=" btn bg-green-500 text-white">preparing</button>




               </div>



            
        </div>
    );
};

export default Cook;