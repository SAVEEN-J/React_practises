import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

function Notes({note}) {
  // console.log(note);
  return(
    <>
    <li>{note.content} {note.important} {note.selectbutton}</li>
    </>
  )
  
}
function App(props) {
  //define a state
  const[notes,setNotes]=useState([]);
  const[newNote,setNewote]=useState('enter your notes')
  const[boolean,setBoolean]=useState('true or false')
  const[onOffSelect,setonOffSelect]=useState('Select on or off')
  const[showStatus,setShowStatus]=useState('all')


  const newnoteRef=useRef("")



  // get data
  useEffect(()=>{
       setNotes(props.notes)
  },[])
 
//when user click submit
  let handleSubmit = (event) => {
         event.preventDefault();

         let newObject={
          id:notes.length+1,
          content:newNote,
          important:boolean==='true',
          selectbutton:onOffSelect,

         }
        //  console.log(newObject);

         setNotes(notes.concat(newObject));
  

    //clear textbox
    setNewote('')
    setBoolean('')
    setonOffSelect('')
    newnoteRef.current.focus();


    // console.log("sumbit");
      }
      let handleNoteChange = (event) => {
       
        setNewote(event.target.value);
        
       console.log(newNote);
      }
      let handleboolChange = (event) => {
       
        setBoolean(event.target.value);
        
        //  console.log(boolean);
      }
      let handleselectchange = (event) => {
       
        setonOffSelect(event.target.value);
        
        //  console.log(boolean);
      }
      let handleStatuChange = (event) => {
      
        setShowStatus(event.target.value);
     
         console.log(event.target.value);
      }
    
let filterNotes=(notes,status)=>{
switch (status) {
  case 'all':
   return notes;
  case 'imp':
  return notes.filter(note =>note.important===true);
  case 'nonimp':
    return notes.filter(note =>note.important===false);
    case 'on':
      return notes.filter(note =>note.selectbutton=="on");
}

  }




 const notesFilter=filterNotes(notes,showStatus)

  return(
    <>
    
    <h2>Notes</h2>
    <label>
    <input type='radio' name='filter' value="all" checked={showStatus ==='all'} onChange={handleStatuChange}/> All notes
    </label>
    <label>
    <input type='radio' name='filter' value="imp" checked={showStatus ==='imp'} onChange={handleStatuChange}/>Important notes
    </label>
    <label>
    <input type='radio' name='filter' value="nonimp" checked={showStatus ==='nonimp'} onChange={handleStatuChange}/>Non important notes
    </label>
    <label>
    <input type='radio' name='filter' value="on" checked={showStatus ==='on'} onChange={handleStatuChange}/>current notes in ON
    </label>
  
    <ul>
      {notesFilter.map((note=>
     
      <Notes key={note.id} note={note} />

      ))}
    </ul>
    <h3>Add Notes</h3>
    <form onSubmit={handleSubmit}>

      <input text="text"value={newNote} onChange={handleNoteChange} ref={newnoteRef}  /><br /><br />
      <select onChange={handleselectchange} value={onOffSelect}>
      <option>---select---</option>
      <option>on</option>
      <option>Off</option>
      </select><br /><br />
      <input type='text' value={boolean} onChange={handleboolChange} placeholder='true ot false'  /><br /><br />
      <button type='submit'>submit</button>
    </form>
    
    </>
  )
}

export default App