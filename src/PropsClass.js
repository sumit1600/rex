import { Component } from "react";

class PropsClass extends Component{
    render(){
        return(
            <div style={{backgroundColor:"skyblue"}}>
                <h6>Name:{this.props.Name}</h6>    
            </div>
        )
    }
}

export default PropsClass