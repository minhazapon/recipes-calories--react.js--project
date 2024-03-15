import { useEffect } from "react";
import { useState } from "react";
import Items from "./Items";




const Food = ({handleKhabar}) => {
    
     const [food, setFood] = useState([])


     useEffect( () => {

         fetch('api.json')
         .then(res => res.json())
         .then(data => setFood(data))

     } , [])




     
//      <div className=" mt-20 text-center">

//      <h1 className=" text-4xl font-bold">Our Recipes</h1>
//      <p className=" mt-5 text-xl text-slate-400">Everyday recipes with ratings and reviews by home cooks like you.<br></br> Find easy dinner ideas, healthy recipes, plus helpful cooking tips and techniques.</p>


// </div>


    return (
        <div className=" grid grid-cols-2 gap-5">

           {

             food.map(food => <Items key={food.id} food={food}
                
                handleKhabar={handleKhabar}
                
                >  </Items>  )



           }



          

          



            
        </div>
    );
};

export default Food;