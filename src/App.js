import logo from './logo.svg';
import './App.css';
function Hello(props) {

return(
  <>
  {/* <p>Hello world!!</p> */}
  <p>Hello {props.name} How Are You</p>
  
  </>
)
  
}
function App() {
  console.log(`javascript code write here`);

  let now =new Date();
  console.log(now);
  return (
    <div className="App">
      <h1>SaveeN React APP creat -time is-------- {now.toString(2)}</h1>

      <div>
        <h1>Greetings</h1>
        <Hello />
        <Hello name='saveen' age='27'/>
        {/* keyvalue and pair */}
        <Hello name='kavi' age='20'/>
        

      </div>
 
    </div>
  );
}

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

export default App;
