import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "", 
      password: "",
    };
  }

  handleOnChange = (e) => {
    e.persist
    this.setState({
      [e.target.name]: e.target.value, 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    if(this.state.username.length > 0 && this.state.password.length > 0) {

      this.props.handleLogin({username: this.state.username, password: this.state.password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleOnChange} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleOnChange} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
