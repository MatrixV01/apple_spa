import React, { Component } from "react";

class Task1 extends Component {

  // function to get Excel Column Code
  handleSubmit = () => {
    // eslint-disable-next-line
    function toColumnName(num) {
      for (var ret = '', a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26) {
        // eslint-disable-next-line
        ret = String.fromCharCode(parseInt((num % b) / a) + 65) + ret;
      }
      return ret;
    }
  }

  render() {
    return (
      <div>
        <h2>Get Excel Column Code</h2>
        <input type='text' onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Task1;