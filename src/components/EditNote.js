import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UpdateForm from './UpdateForm';

function EditNote() {
    const [options, setOptions]=useState([]);
    const [selectedOption, setselectedOption]=useState('');

    //get the id from backend
    useEffect(()=>{
       axios
        .get('http://localhost:3002/notes/')
        .then(responce => setOptions(responce.data));
      
    },[]);
    let selectHandeler = (event)=>{
        setselectedOption(event.target.value);
    }
  return (
    <div>
        <h1>Edit Notes</h1>
   <label>
    Select an ID To Edit 
    <select onChange={selectHandeler} value={selectedOption}>
        <option value=''>Select an Option</option>
        {
            // console.log(options)
            options.map(option =>(
                <option key={option.id}>{option.id}</option>
               
            ))
         
        }
    </select>


    </label>     

    {selectedOption && <UpdateForm />}
    
    </div>
  )
}

export default EditNote;