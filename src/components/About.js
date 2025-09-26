import User from "./User";
import Userclass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent constructor");
  }
  componentDidMount() {
    //console.log("Parent CDM");
  }
  render() {
    //console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is contents of about page</h2>
        <Userclass name={"First"} location={"Vdm Class"} />
      </div>
    );
  }
}

export default About;
