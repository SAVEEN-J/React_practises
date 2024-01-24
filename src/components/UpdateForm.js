import React from 'react'

function UpdateForm() {
  return (
    <>
        <h1>UpdateForm</h1>
     
         <form >
      <input
       
        placeholder='type a note...' 
       
        /> <br /><br />
         <label form='dropdownNoteImportant'>Is Important: </label>
      <select
        id='dropdownNoteImportant'
       >
        <option>--Select--</option>
        <option>true</option>
        <option>false</option>
      </select>
      <br /><br />
      <button type='submit'>Update New Note</button>
    </form>

        
        
    </>
  )
}

export default UpdateForm