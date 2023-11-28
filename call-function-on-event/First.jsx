import React from "react";
class First extends React.Component {
  clickMe() {
    alert("Hello everyone");
  }
  render() {
    return (
      <div>
        {this.props.name} {this.props.title} <br />
        <button onClick={() => this.clickMe()}> Press the button</button>
      </div>
    );
  }
}
export default First;
