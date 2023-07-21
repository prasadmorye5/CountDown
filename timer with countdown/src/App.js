import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "June, 15, 2023"

  const getTime =() => {

    const time = Date.parse(deadline) - Date.now()
    setDays(Math.floor(time/(1000*3600*24)))
    setHours(Math.floor(time/(1000*3600)%24))
    setMinutes(Math.floor(time/(1000/60)%60))
    setSeconds(Math.floor((time/1000)%60))
  }
  useEffect(() => {
    const interval = setInterval(()=> getTime(deadline),1000)
    return ()=> clearInterval(interval)
  },[])

  return (
    <>
    <div className="w-[100vw] h-[100vh] grid bg-yellow-400 place-content-center  ">

    <div className="flex gap-10 border-double border-4 border-sky-500">
        <span>{days} Days</span>
        <span>{hours} Hours</span>
        <span>{minutes} Minutes</span>
        <span>{seconds} Seconds</span>



    </div>



    </div>

    </>
  );
}

export default App;
