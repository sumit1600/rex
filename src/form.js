import React,{useState} from "react";
function Form(){
    const [Name,SetName]= useState("")
    const [Select,SetSelect]= useState("")
    const [TnC,SetTnC]= useState(false)
    function submit(e){
        console.warn(Name,Select,TnC);
        e.preventDefault()
    }
    return(
        <form onSubmit={submit}>
            <input type="text" placeholder="Name" onChange={(e)=>SetName(e.target.value)}/><br></br>
            <select onChange={(e)=>SetSelect(e.target.value)}>
                <option>ABC</option>
                <option>XYZ</option>
                <option>JKL</option>
            </select><br></br>
            <input type="checkbox" onChange={(e)=>SetTnC(e.target.checked)}/> <span>T and C</span><br></br>
            <button>Submit</button>
        </form>
    )
}

export default Form