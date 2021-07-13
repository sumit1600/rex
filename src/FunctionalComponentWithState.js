import './App.css';
import {useState} from 'react'
function FunctionalComponentWithState() {
  const [data,newData]=useState(0)
  function updateData(){
    newData(data+1)
  }
  return (
    <div>
        <span>{data}</span>
        <button onClick={updateData}>Click Me</button>  
    </div>
  );
}

export default FunctionalComponentWithState;