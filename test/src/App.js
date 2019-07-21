import React from "react";
import logo from "./logo.svg";
import "./App.css";
import randomId from "./components/randomId";

class App extends React.Component {
  state = {
    users: [],
    photos: []
  };

  componentDidMount() {
    const url = "http://uinames.com/api/?amount=5&ext";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data,
          photos: data.photo
        });
      });
  }

  handelOnClick() {
    this.setState({});
  }

  render() {
    console.log(this.state.users);
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.users.map(userInfo => {
            return (
              <li key={randomId()}>
                name: {userInfo.name}, surname: {userInfo.surname}
                Email:{userInfo.email}, gender: {userInfo.gender}, region:{" "}
                {userInfo.region}
              </li>
            );
          })}
        </ul>
        <button onClick={this.handelOnClick}>click to show users!!</button>
      </div>
    );
  }
}

export default App;
