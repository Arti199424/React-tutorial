import React from "react";
class First extends React.Component{
    render(){
        return (
            <div> {this.props.name} {this.props.age} </div>
        );
    }
}
export default First;