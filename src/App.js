import React from 'react';
import Squarec from './Components/Molecules/Square';

export default function App() {
  return (
    <div className="Appheader">
     <p className='heading'> Tic-Tac-Toe By ShravanJ </p>
     <div className='row center'>
      <Squarec className="b-bottom-right"/>
      <Squarec className="b-bottom-right"/>
      <Squarec className="b-bottom-right"/> </div>

     <div className='row center'>
     <Squarec className="b-bottom-right"/>
     <Squarec className="b-bottom-right"/>
     <Squarec className="b-bottom-right"/> </div>
     <div className='row center'>
      <Squarec className="b-bottom-right"/>
     <Squarec className="b-bottom-right"/>
     <Squarec className="b-bottom-right"/> </div>
     <button className='learbutton'>Clear</button>
    </div>
  );
}


