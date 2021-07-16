import './App.css';
import { useState } from 'react';
import ClassComponentWithState from './ClassComponentWithState';
import FunctionalComponentWithState from './FunctionalComponentWithState';
import PropsFunctional from './PropsFunctional';
import PropsClass from './PropsClass';
import Form from './form';
import PassFunctionAsProps from './PassFunctionAsProps'
import HooksUseEffect from './HooksUseEffect'

function App() {
  const [Name,NewName] = useState("Sumit")
  const [Print,SetPrint] = useState(false)
  const [Data,SetData] = useState(null)
  const [Toggle,SetToggle] = useState(true)

  function getData(val){
    SetData(val.target.value)
    SetPrint(false)
  }

  function callParent(){
    alert("App fucntion Called")
  }

  return (
    <div className="App">
      {/* FunctionalComponentWithState       */}
      <span>FunctionalComponentWithState: <FunctionalComponentWithState/> </span> 
      {/* ClassComponentWithState */}
      <span>ClassComponentWithState: <ClassComponentWithState/> </span>
      {/* Props in Functional Component*/}
      <span>PropsFunctional: <PropsFunctional Name={"SAM"} Mob={999} Other={{Add:"Kurawali",Pin:205265}} /> </span>
      <span>PropsFunctional: <PropsFunctional Name={Name} Mob={999} Other={{Add:"Kurawali",Pin:205265}} /> </span>
      <button onClick={()=>NewName("UpdatedSumit")}>Update Prop Name</button>
      {/* Props in Class Component*/}
      <span>PropsClass: <PropsClass Name={"SAM"} Email={"sam@test.com"} /> </span>
      <span>PropsClass: <PropsClass Name={Name} Email={"sam@test.com"} /> </span>
      <button onClick={()=>NewName("UpdatedSumit")}>Update Prop Name</button>
      {/* Get input value */}
      <span>
        {
          Print?<h4>{Data}</h4>:null
        }
        <input type="text" onChange={getData} />
        <button onClick={()=>SetPrint(true)}>On Click</button>
      </span>  
      {/* toggle */}
      <span>
        {
          Toggle?<h4>Toggle Data</h4>:null
        }
        <button onClick={()=>SetToggle(!Toggle)}>Toggle</button>
      </span>
      {/* Form */}
      <Form/>
      {/* PassFunctionAsProps */}
      <PassFunctionAsProps data={callParent}/>
      {/* HooksUseEffect */}
      <HooksUseEffect/>
    </div>
  );
} 

export default App;
