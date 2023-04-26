import './App.css';
import {useState} from 'react'


export default function App() {

const [cnt,setcnt]=useState(0)

function increasenum(){
  const counts=cnt+1
  setcnt(counts)
}
function decreasenum(){
  const countss=cnt-1
  setcnt(countss)
}





return(
  <div className='newdiv'>
    <h3> Count is:  {cnt}</h3>
    <button onClick={increasenum}>Increment</button> 
    <button onClick={decreasenum}>Decrement</button>
  </div>

)






}




