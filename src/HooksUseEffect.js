import React,{useEffect,useState} from "react"
import HooksUseEffectChild from './HooksUseEffectChild'

function HooksUseEffect(){
    const [data,setData]=useState(10);
    const [count,setCount]=useState(100);
    useEffect(()=>{
        console.warn("Use Effect Called");
    },[data])
    return(
        <div>
            <h3>HooksUseEffect Data: {data}</h3>
            <h3>HooksUseEffect Count: {count}</h3>
            <button onClick={()=>setData(data+1)}>Set Data</button>
            <button onClick={()=>setCount(count+1)}>Set Count</button>
            <HooksUseEffectChild data={data} count={count}/>
        </div>
    )
}

export default HooksUseEffect