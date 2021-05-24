import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: this.props.maxChars
    };
  }

  handleOnChange = (e) => {
    e.persist
    this.setState(previousState => {
      return {
      message: e.target.value, 
      maxChars: previousState.maxChars - 1
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleOnChange}/>
        {this.state.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
