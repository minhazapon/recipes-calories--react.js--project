
import './App.css'
import Food from './Food'
import Header from './Header'
import Show from './Show'

function App() {


  return (
    <>
      
    <Header></Header>

     <div className=' flex  gap-36'> 
    <Food></Food>
    <Show></Show>
    </div>
     
   
    </>
  )
}

export default App
