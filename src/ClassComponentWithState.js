import './App.css';
import React,{Component} from 'react';

class ClassComponentWithState extends Component{

  constructor(){
    super()
    this.state = {data:1}
  }

  updateData(){
    this.setState({data:this.state.data+1})
  }

  render(){
    return(
      <div>{this.state.data}
        <button onClick={()=>this.updateData()}>Click Me</button>
      </div>  
    )
}
}

export default ClassComponentWithState
