
import { useState } from 'react'
import './App.css'
import Food from './Food'
import Header from './Header'
import Show from './Show'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';








function App() {


   const [khabar, setKhabar] = useState([])


   const handleKhabar = food => {

     const newKhabar = [...khabar, food]

     setKhabar(newKhabar)

    toast('food is ready')


   }


  





  return (
    <>
      
    <Header></Header>

     <div className=' flex  gap-16 justify-center'> 
    <Food handleKhabar={handleKhabar}  ></Food>
    <Show khabar={khabar} ></Show>
    </div>

    <ToastContainer></ToastContainer>
        
    

  
    </>
  )
}

export default App
