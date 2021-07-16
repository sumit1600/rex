import React,{useEffect} from "react"

function HooksUseEffectChild(props){
    useEffect(()=>{
        console.warn("Use Effect Child Called for Data");
    },[props.data])
    useEffect(()=>{
        console.warn("Use Effect Child Called for Count");
    },[props.count])
    return(
        <div>
            <h3>HooksUseEffectChild Data: {props.data}</h3>
            <h3>HooksUseEffectChild Count: {props.count}</h3>
        </div>
    )
}

export default HooksUseEffectChild