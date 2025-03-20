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
    console.log(">>> check props: ", this.props);
    // let name = this.props.name;
    // let age = this.props.age;

    let { name, age, address, arrJob } = this.props;

    return (
      //react class => className
      //props: property

      <>
        <div className="job-lists">
          {arrJob.map((item, index) => {
            return (
              <div key={item.id}>
                {item.title} - {item.salary}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ChildComponent;
