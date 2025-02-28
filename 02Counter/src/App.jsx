import {useState} from 'react'
import './App.css'

function App() {

let [counter, setCounter] = useState(5);

const addValue = () => {
  //counter += 1;
  setCounter(counter + 1);
  // setCounter((prev) => prev + 1);
  // setCounter((prev) => prev + 1);

  //Interview Question : if setCounter is repeat contiuously 4 time then on one click value will be 19 or 16
  //Answer : 16
  //Reason : setCounter is async function and it will not update the value immediately
  //So, if we want to get the updated value then we can use callback function of setCounter
  //setCounter((prev) => prev + 1);
}
const removeValue = () => {
  //counter -= 1;
  setCounter(counter - 1);
}
  return (
    <>
      <h1>Counter Application</h1>
      <h3>Counter Value: {counter}</h3>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
