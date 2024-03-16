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