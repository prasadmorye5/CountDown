import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(10);
  let msg =''
  
const descending = () => {
  setCount(count - 1)
}

  if (count > 0){
   setInterval(descending, 1000)
  }
  else{
    clearInterval(setInterval);
    return("END")
    // msg = "The End"
  }
  

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center'>
        <h1 className='text-5xl' onClick={descending}> {count} </h1>

        <h2> {msg} </h2>
    </div>
    
  );
}
export default App;
