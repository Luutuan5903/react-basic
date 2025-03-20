import React from "react";

//class component --> render
class ChildComponent extends React.Component {
  //key:value
  state = {
    firstName: "",
    lastName: "",
  };

  /*
    JSx => return về 1 khối
    Fragment
    state --> bộ nhớ lưu biến
    */

  handleChangefirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangelastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">> check data input: ", this.state);
  };
  //re-render
  render() {
    console.log(">>> call render: ", this.state);
    return (
      //react class => className
      //props: property

      <>
        <div>child Component: {this.props.name}</div>
      </>
    );
  }
}

export default ChildComponent;
