import React,{useState} from "react";
function App() {
  const [counter, setIsCounter] = useState(0)
  
  const Addvalue = ()=>{
      if( counter < 20){
  
      setIsCounter(counter + 1)
      console.log("clicked",counter)
  
    }else{
      console.log("maximum value reached (20)");
    }
  };

   const removeValue = ()=>{
    if(counter > 0){
      setIsCounter ( counter -1);
      console.log("clicked", counter)
    }
    else{
      console.log("minimum value reached (0)")
    }
   } ;
   
  // const reset = () =>{
  //   setIsCounter (counter - counter)
  //   console.log("reset clicked", counter)
  // }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={Addvalue}>Add value</button>
    <br />
    <button  onClick= {removeValue}>Remove value</button>
    {/* <button onClick= {reset}>Reset</button> */}

    </>
  );
}

export default App
