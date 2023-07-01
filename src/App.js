import React, { useState } from 'react'
import { useReducer } from "react";

//define reducer
const addReducer=(state,action)
// create a store
const store = createStore
console.log(store);

function App() {//1..passing data from index.js

  const[notes,setNotes]=useReducer()///2.create state

  // console.log(notes);
  ///3.use map to loop each data and display in li tag and create ione new component

  let AddNewNotes=()=>{
    console.log("working");

  }
  return (
    <>
    <h1>Redux</h1>
 
   
        <button type='button'> Good</button>
        <button type='button'> Ok</button>
        <button type='button'> Bad</button>
        <button type='button' > Reset stats</button>




    

    
    </>
  )
}

export default App