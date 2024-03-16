

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Items = ({food, handleKhabar}) => {

     const handleToast = () => {

      toast('food had ready')


     }



    const {name, description, image, ingredients, time, calories} = food


    return (
        <div>


           <div className=" mt-16 ">

           <div className="card w-96 bg-base-100 shadow-xl ">
           <figure className="px-10 pt-10">
             <img src={image} alt="Shoes" className="rounded-xl" />
           </figure>
           <div className="card-body items-center text-center">
             <h2 className="card-title"> {name} </h2>
             <p className=" text-xl text-slate-400"> {description} </p>
             <p className=" font-bold"> <span className=" text-xl">ingredients: 6 </span><br></br>
               <span className=" flex gap-2">{ingredients}</span>
                 </p>
               
               <div className=" flex gap-32 mt-4">
                     
                     <h1 className=" flex  gap-2 text-slate-400 font-bold"> 
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                       </svg>
                         {time}
                     </h1>
                     <h1 className=" flex items-center text-slate-400 font-bold">
                   
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                      </svg>
                      {calories} 
                     </h1>
               </div>

             <div className="card-actions">
               <button onClickCapture={handleToast} onClick={() =>  handleKhabar(food)} className="btn btn-primary mt-4 w-[300px] text-xl">Want to cook</button>
               <ToastContainer />
             </div>
           </div>
           </div>

              











           </div>


            
        </div>
    );
};

export default Items;