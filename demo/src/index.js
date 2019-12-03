import React, { Component } from "react";
import { render } from "react-dom";

import Example from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>sample-venia-loader-icon Demo</h1>
        <Example width="64" loading>
          {"Hey"}
        </Example>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
