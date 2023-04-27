import { Fragment,useState } from "react";
import getRandom from "../Organisms/getrandom";
import  getMessage from "../Organisms/getmessage";
// import Button1 from "../Atoms/button";

export default function Game(){
const [guess,setguess]=useState()
const [random,setrandom]=useState(getRandom(10))
const[message,setmessage]=useState()
const [count,setcount]=useState(0)
const checkguess=()=>{
    setmessage(getMessage(guess,random))
    setcount((count)=>count+1)
}
const start=()=>{setrandom(getRandom(10))
setcount(0)
setmessage('')}

return(
    <form>
        <input type="number"value={guess} placeholder="Guess lucky number..."
        onChange={(e) => setguess(e.target.value)}/>
        {message !=="Congratulations!! You have guessed the right number..." ?
        <button type="button"
        onClick={checkguess}>Match  Number</button>:(<button type="button" onClick={start}>Start again!</button>)}
         <div>{message}</div>
      <div>No of guesses {count}</div>
    </form>
  )}