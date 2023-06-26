// import logo from './logo.svg';
// import './App.css';
// function Hello(props) {
// // ""day 3 react
// return(
//   <>
//   {/* <p>Hello world!!</p> */}
//   <p>Hello {props.name} How Are You</p>
  
//   </>
// )
  
// }
// function App() {
//   console.log(`javascript code write here`);

//   let now =new Date();
//   console.log(now);
//   return (
//     <div className="App">
//       <h1>SaveeN React APP creat -time is-------- {now.toString(2)}</h1>

//       <div>
//         <h1>Greetings</h1>
//         <Hello />
//         <Hello name='saveen' age='27'/>
//         {/* keyvalue and pair */}
//         <Hello name='kavi' age='20'/>
        

//       </div>
 
//     </div>
//   );
// }

// // const App=()=>{
// //   console.log(`javascript code write here`);
// //   return(
// //     <>
// //     <div>

// //       <p>para</p>
// //     </div>
    
// //     </>
// //   )
// // }
//////////////////////////////////////////////////////////day4
// export default App;
// import React from 'react'
// //functional component
// function App() {
//   return (
//     <>
//     <h1>React- Day -4 : React components</h1>
//     <pre>
//     Contents:
// Components - In depth
// Component life cycle
// Stateful and stateless components
// Reusable components 
// Passing dynamic data to component
// Introduction to Hook
// Pre-read:
// https://www.npmjs.com/package/react-router-dom

//     </pre>
    
    
    
    
//     </>
//   )
// }

// export default App

//class component
// import { Component } from "react"
// class App extends Component{
//   render(){
//     return <>HEllo world</>
//   }
// }
// export default App



////////////////////////////////////// /passing props in class component

import { Component } from "react";

// class Hello extends Component {

//   render() {

//     // console.log(this.props);
//     const { name } = this.props;

//     return (
//       // <div>Hello, {this.props.name}!</div>
//       <div>Hello, {name}!</div>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Hello name={ 'Krish' } />
//       </div>
//     )
//   }
// }

// export default App;



/////////////////////only for class comp    different stage 

// import React, { Component } from 'react';

// export class App extends Component {

//   // componentDidMount: called after the component has been rendered to the DOM
//   componentDidMount() {
//     console.log('component mounted');
//   }

//   componentDidUpdate() {
//     // invoked after the component has been updated in the DOM
//     // state or prop changes
//   }

//   componentWillUnmount() {
//     // invoked just before the component is removed from the DOM
//     // releasing memory or resources
//     // detaching the events
//     // cancelling timers
//   }

//   render() {
//     return (
//       <div>Hello, World!</div>
//     )
//   }
// }

// export default App;

//////////////////////////////////////////////////////// stateful components

// import React, { Component } from 'react';

export class App extends Component {

  constructor(props) { //when the component constructor also call the same time
    super(props); //we call constructor through super
//inti the count value0 
    this.state = {
      count: 0,
    };
  }

  handlePlusClick = () => {
    //update pana set statu using
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  handleMinusClick = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  handleZeroClick = () => {
    this.setState((prevState) => ({
      count: 0,
    }));
  }


  render() {
    return (
      <div>
        <p>Count: {this.state.count} </p>
        <button onClick={this.handlePlusClick}>plus</button>
        <button onClick={this.handleMinusClick}>minus</button>
        <button onClick={this.handleZeroClick}>zero</button>
      </div>
    )
  }
}

export default App;

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