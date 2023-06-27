

// import React, { Component } from 'react';
// import Hello from './components/Hello';

// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <Hello />
//       </div>
//     )
//   }
// }

// export default App;

import React from 'react'
import { useState } from 'react'


// function Button(params) {
//   return(
//     <button onClick={params.handleclick}>{params.text}</button>
//   )
  
// }
// const Display=(props) => {
//   return(
//     <div>
//       {props.countbtn}
//     </div>
//   )
// }
// function App() {
  
// //set state
// const[count,setcount]=useState(0);
// const[countbtn,setcountbtn]=useState(0);


// // setTimeout(()=>
// //   setcount(count + 1),10000
// // )
// const handleADDClick=()=>{
//   setcountbtn(countbtn+1)
// }
// const handleZeroClick=()=>{
//   setcountbtn(countbtn *0)
// }
// const handleSubClick=()=>{
//   setcountbtn(countbtn-1)
// }
// const a={ x: 1};
// const b={ x: 1};
// // console.log(a['x']===b['x']);
// // console.log(a!=b);
// // console.log(a==b);
// // console.log(a.x=b.x);



//   return (
//     <div>
//       <h1>React- Day -5 : react hooks
// 14/06/2023 - Wednesday - 6:30 PM : 9:30 PM</h1>
// <p>Contents:
// What is hook?
// Lifecycle of Hook
// useState, useEffect
// Props drilling
// Passing data from child to parent component
// Pre-read:
// https://www.npmjs.com/package/react-router-dom</p>
      

// <div>{count} time count 10 sec once</div>
// <div>
// {/* <Display countbtn={countbtn}/> 
//  <div><button onClick={handleADDClick}> + </button><button onClick={handleZeroClick}> 0 </button><button onClick={handleSubClick}> - </button></div> */}

// <div>
//   <Display countbtn={countbtn}/>
//   <Button text="plus" handleclick={handleADDClick}/>
//   <Button text="zero" handleclick={handleZeroClick}/>
//   <Button text="minus" handleclick={handleSubClick} />

// </div>

// {/* Passing data from child to parent component */}




// </div>


//     </div>
//   )
// }


/////////////////////////usereffect
function Buttonchild({onMessage}) {
  let messagefromChild="childSAveen"
  console.log(onMessage);
  const handleclick=()=>{
    onMessage(messagefromChild)
  }
  return(
    <>
      <button  onClick={handleclick}>message going to parent</button>
    </>
  )



}
function App() {
  const[messagefromChild,setmessagefromChild]=useState("");
  const handlemessage=(childmessage)=>{
    setmessagefromChild(childmessage)
  }

  return (
    <div>{messagefromChild}<Buttonchild onMessage={handlemessage} /></div>
  )
}

export default App
// stateful components

// import React, { Component } from 'react';

// export class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   handlePlusClick = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   }

//   handleMinusClick = () => {
//     this.setState((prevState) => ({
//       count: prevState.count - 1,
//     }));
//   }

//   handleZeroClick = () => {
//     this.setState((prevState) => ({
//       count: 0,
//     }));
//   }


//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count} </p>
//         <button onClick={this.handlePlusClick}>plus</button>
//         <button onClick={this.handleMinusClick}>minus</button>
//         <button onClick={this.handleZeroClick}>zero</button>
//       </div>
//     )
//   }
// }

// export default App;

// import React, { Component } from 'react';
// import Hello from './components/Hello';

// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <Hello />
//       </div>
//     )
//   }
// }

// export default App;

// useState hook
// functional - stateful component
// state changes triggers component re-rendering

// import React, { useState } from 'react';

// function App() {

//   const [counter, setCounter] = useState(0);

//   setTimeout(
//     () => setCounter(counter + 1), 1000
//   );

//   console.log('rendering...', counter);

//   return (
//     <div>{counter}</div>
//   )
// }

// export default App;

// import React, { useState } from 'react';

// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }

// function Button(props) {
//   return (
//     <button onClick={props.handleClick}>{props.text}</button>
//   )
// }

// function App() {
//   const [counter, setCounter] = useState(0);

//   const handlePlusClick = () => setCounter(counter + 1);

//   const handleMinusClick = () => setCounter(counter - 1);

//   const handleZeroClick = () => setCounter(0);

//   return (
//     <div>
//       {/* display a counter state */}
//       <Display counter={counter} />
//       <Button text='plus' handleClick={ handlePlusClick } />
//       <Button text='minus' handleClick={ handleMinusClick } />
//       <Button text='zero' handleClick={ handleZeroClick } />
//     </div>
//   )
// }

// export default App;

// import React, { useState } from 'react';

// function App() {

//   const [isButtonEnabled, setIsButtonEnabled] = useState({
//     button1: false,
//     button2: false,
//   });
//   const [cartData, setCartData] = useState([]);

//   const handleClick = (buttonName) => {
//     setCartData([...cartData, 12]);
//     setIsButtonEnabled((prevState) => ({
//       ...prevState,
//       [buttonName]: true
//     }));
//   }

//   console.log(cartData);

//   return (
//     <div>
//       <input />
//       {/* <button >Toggle</button> */}
//       <button disabled={isButtonEnabled.button1} onClick={() => handleClick('button1')}>Button</button>
//       <button disabled={ isButtonEnabled.button2 } onClick={() => handleClick('button2')}>Button</button>
//     </div>
//   )
// }

// export default App;

// import React, { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState(null);

//   // runs only one time
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   // console.log(data);

//   return (
//     <div>
//       <h1>API DATA</h1>
//       {
//         data ? (
//           <ul>
//           {
//             data.map(item => <li key={item.id}>{ item.title }</li>)
//           }
//         </ul>
//         ) : (
//             <p>Loading data...</p>
//         )
//       }
//     </div>
//   )
// }

// export default App;

// import React, { useEffect, useState } from 'react';

// function App() {

//   const [count, setCount] = useState(0);


//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   const incrementHandler = () => {
//     setCount(count + 1);
//     // document.title = `Count: ${count}`;
//   }

//   // document.title = `Count: ${count}`;

//   return (
//     <div>
//       <h1>Document Title Updater</h1>
//       <button onClick={incrementHandler}>Increment</button>
//     </div>
//   )
// }

// export default App;

// props drilling: parent component that passes props to the nested child components
// import React from 'react';

// function GrandChildComponent({ parentData }) {
//   console.log(`from grand child component: ${parentData}`);
//   return (
//     <div>
//       <h3>Grand Child Component</h3>
//     </div>
//   )
// }

// // child component
// function ChildComponent({ parentData }) {

//   console.log(`from child component: ${parentData}`);

//   return (
//     <div>
//       <h2>Child Component</h2>
//       <GrandChildComponent parentData={parentData} />
//     </div>
//   )
// }

// // parent component
// function App() {

//   const parentData = 'Hello from Parent';

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <ChildComponent parentData={ parentData } />
//     </div>
//   )
// }

// export default App;

// Passing data from the child component to the parent component
// import React, { useState } from 'react';

// function ChildComponent({onMessage}) {

//   const message = 'Hello from Child';

//   const handleClick = () => {
//     onMessage(message);
//   }

//   return (
//     <>
//       <h2>Child Component</h2>
//       <button onClick={handleClick}>Send Message to the Parent</button>
//     </>
//   )
// }

// function App() {

//   // set a state to handle child data
//   const [message, setMessage] = useState('');

//   const handleMessage = (data) => {
//     setMessage(data);
//   }

//   return (
//     <div>
//       <h2>Parent Component</h2>
//       <p>Message from the Child Component: { message }</p>
//       <ChildComponent onMessage={ handleMessage } />
//     </div>
//   )
// }

// export default App;