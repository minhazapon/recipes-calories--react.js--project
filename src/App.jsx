
import { useState } from 'react'
import './App.css'
import Food from './Food'
import Header from './Header'
import Show from './Show'

function App() {


   const [khabar, setKhabar] = useState([])


   const handleKhabar = food => {

     const newKhabar = [...khabar, food]

     setKhabar(newKhabar)


   }





  return (
    <>
      
    <Header></Header>

     <div className=' flex  gap-16 justify-center'> 
    <Food handleKhabar={handleKhabar}  ></Food>
    <Show khabar={khabar} ></Show>
    </div>
     
   
    </>
  )
}

export default App
