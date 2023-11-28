import React from "react";
class First extends React.Component {
  constructor(props){
    super(props)
        this.state={
            name:'super',
            age:parseInt(props.age)
        
    }
  }
  changeState(){
    this.setState({name:'X Factor',age:this.state.age+1})
    console.log('change state')
  }
  render() {
    return (
      <div>
        {this.props.name} {this.props.title} <br />
        {this.state.name} {this.state.age} <br />
         <button onClick={() => this.changeState()}> Change the State</button> 
      </div>
    );
  }
}
export default First;
