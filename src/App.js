// A Simple Note taking Application
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';

  import {
    BrowserRouter as Router,
    Route,
    Routes
  } from 'react-router-dom';
  
import ReadNotes from './components/ReadNotes';
import { Link } from 'react-router-dom';
import Home from './components/Home';


function App() {
  
  // define a state
  const [notes, setNotes] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');
  const [showStatus, setShowStatus] = useState('all');
 const padding ={
  padding:15
 };
  // get the data
  //runs only once: for the first time []
  //runs always
  useEffect(() => {
    // setNotes(props.notes);
    ///read the data in CURD READ OPRATION
    axios
    .get('http://localhost:3001/notes/')
   .then(responce => setNotes(responce.data))
  },[]);

  // create a reference for the first input text box
  const newNoteContentRef = useRef(null);
  // define the addNote method
  let addNote = (event) => {
    event.preventDefault();
      // create a new object
    let noteObject = {
      id: notes.length + 1,
      content: newNoteContent,
      important: newNoteImportant==='true',
    }
    // add the new object to the notes state
    // setNotes(notes.concat(noteObject));
    //send thbe record to json usinf post method
    axios
    .post('http://localhost:3001/notes', noteObject)
    // .then(response => console.log(response))
    // clear the input text box
    setNewNoteContent('');
    setNewNoteImportant('');
    newNoteContentRef.current.focus();
  }

  let handleNoteChange = (event) => {
    setNewNoteContent(event.target.value);
  }

  let handleSelectChange = (event) => {
    setNewNoteImportant(event.target.value);
  }

  let handleStatusChange = (event) => {
    setShowStatus(event.target.value);
     }

  return (
 <Router>
  <div>
    <Link style={padding} to="/">Home </Link>
    <Link style={padding} to="/read">Read Notes</Link>
    <Link style={padding} to="/create">Create Notes</Link>
    <Link style={padding} to="/edit">Edit Notes</Link>
    {/* <Link style={padding} to="/update">Update Notes</Link> */}



  </div>
    <Routes>
      <Route path='/read' element={<ReadNotes notes={notes} showStatus={showStatus} handleStatusChange={handleStatusChange} />} />
      <Route path='/create' element={ <CreateNote addNote={addNote} newNoteContent={newNoteContent} handleNoteChange={handleNoteChange} newNoteContentRef={newNoteContentRef} handleSelectChange={handleSelectChange} newNoteImportant={newNoteImportant} />} />
      <Route path='/' element={<Home />} />
      <Route path='/edit' element={<EditNote />} />
      {/* <Route path='/' element={<Home />} /> */}

    </Routes>
</Router>
    
  )
}

export default App;