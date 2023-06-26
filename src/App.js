// import logo from './logo.svg';
// import './App.css';


// function Note({allnotes}) {

// //  console.log(allnotes);

// // if (allnotes.important) {
// //   return(
  
// //     <li>{allnotes.content}*</li>
         
// //     )
  
// // } else {
// //   return(
  
// //     <li>{allnotes.content}</li>
         
// //     )
  
// // }
// return(
// <li>
//   {/* {allnotes.important ? allnotes.content + ' * ' : allnotes.content} */}
//     {/* &&is ambesent only use when its is true */}
//   {allnotes.content}{allnotes.important && "*"}


// </li>
// )
  
// }
// function App({notes}) {

// // const {notes}=props;
// //  console.log(notes);
//   let now =new Date();
//   // console.log(now);

// const addNote=(event)=>{
//   event.preventDefault();
//   console.log(event);
// }
//   return (
   
      
//       <>
//         <h1 className='App'> Day_24</h1>
//         <h1 className='App'>React- Day -3 : React hooks & states</h1>
//         <pre>
//         Contents:
// Working with array lists
// Usage of keys
// Conditional rendering
// Handling Events
// Props vs state
// Pre-read:
// https://reactjs.org/docs/hooks-overview.html
// https://reactjs.org/docs/hooks-rules.html



//         </pre>
        
     
//         <ul>
//           {/* {notes.map(note=>
//             <li>{note.content}</li>
//           )} */}
//           {notes.map(allnotes => <Note key={allnotes.id} allnotes={allnotes} />)}
         
             

//         </ul>


//         <form>
//           <input/>
//           <button type="submit"  onClick={addNote}>  Add Note</button>
//         </form>
     
        

//       </>
 
    
//   );
// }

// const App=()=>{
//   console.log(`javascript code write here`);
//   return(
//     <>
//     <div>

//       <p>para</p>
//     </div>
    
//     </>
//   )
// }
/////////////////day3 
// import React from 'react';

// function Note({ note }) {
  
//   return (
//     <li>
//       {note.content} {note.important && ' ★' }
//     </li>
//   )
// }

// function App({ notes }) {
  
//   const addNote = (event) => {
//     event.preventDefault();
//     // console.log(event);
//     console.log('button clicked');
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           <Note key={note.id} note={ note } />
//         )}
//       </ul>

//       <form>
//         <input />
//         <button onClick={addNote}>Save Note</button>
//       </form>
//     </div>
//   )
// }

// export default App;
////////////////////////////////////////////////// day 4_25
import React from 'react'

function App() {
  return (
    <>
    <h1>React- Day -4 : React components</h1>
    <pre>
    Contents:
Components - In depth
Component life cycle
Stateful and stateless components
Reusable components 
Passing dynamic data to component
Introduction to Hook
Pre-read:
https://www.npmjs.com/package/react-router-dom

    </pre>
    
    
    
    
    </>
  )
}

export default App
