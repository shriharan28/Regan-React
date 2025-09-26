import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.name + "Child constructor");
    this.state = {
      userInfo: {
        login: "null",
        type: "null",
      },
    };
  }
  async componentDidMount() {
    //console.log(this.props.name + "Child CDM");
    const data = await fetch("https://api.github.com/users/shriharan28");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }
  render() {
    //console.log(this.props.name + "Child render");
    const { login, user_view_type } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {login}</h2>
        <h3>Location: {user_view_type}</h3>
        <h3>Contact</h3>
      </div>
    );
  }
}
export default Userclass;
