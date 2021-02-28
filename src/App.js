import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [nayoks,setNayoks]= useState([]);
  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>console.log(data))
  },[]

  )
  return (
    <div >
      
    {/* {nayoks.map(nk=> <Nayok name={nk.name}></Nayok>)}
    <h1>hello world</h1>
    <p>I am learning</p> */}
    <Nayok></Nayok>
   
    </div>
  );
}

function Nayok(props){
return(
  <div><h3>I am nayok</h3></div>
)
};

export default App;
