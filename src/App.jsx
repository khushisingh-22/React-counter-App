import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [counter,setcounter] =  useState(0)//re in[ variable,function whic is responsible to update variable] and we use hooks here to update UI

  //let counter = 8 // app ka data
  const addValue = () =>{  // app ka function
    console.log("clicked",counter);
   //counter = counter +1
   setcounter(counter+1)
  }

   const removeValue = () =>{
      // app ka function

    //nsole.log("clicked",counter);
   //counter = counter +1
   if(counter>0)
   setcounter(counter-1)
  }
  return (
    <div className="container">
      <div className="card">
        <h1>React Counter App</h1>
        <h2>Counter Value: {counter}</h2>

        <button className="add" onClick={addValue}>Add</button>
        <button className="remove" onClick={removeValue}>Remove</button>
      </div>
    </div>
  )
}
export default App
