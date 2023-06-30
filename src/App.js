import React, { useState } from 'react'

//4.component createand display content
function Notes({note}) {
  return(<>
   <li>{note.content}</li>
   </>)
  
}
function App(props) {//1..passing data from index.js

  const[notes,setNotes]=useState(props.notes)///2.create state

  // console.log(notes);
  ///3.use map to loop each data and display in li tag and create ione new component

  let AddNewNotes=()=>{
    console.log("working");

  }
  return (
    <>
    <h1>notes</h1>
    <ul>
     {notes.map(note=>
     <Notes key={note.id} note={note} />
      
      )} 

    </ul>
    <form onSubmit={AddNewNotes}>
        <input />
        <button type='submit'> Add Notes</button>



      </form>

    
    </>
  )
}

export default App