import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import WelcomeMessage from "./components/WelcomeMessage";

class App extends Component {
  constructor(props) {
    super(props);
    this.hideWelcomeMessage = this.hideWelcomeMessage.bind(this);
    this.state = {
      showWelcomeMessage: true
    };
  }

  hideWelcomeMessage() {
    this.setState({ showWelcomeMessage: false });
  }

  render() {
    const { showWelcomeMessage } = this.state;

    return (
      <>
        <CssBaseline />
        {showWelcomeMessage && (
          <WelcomeMessage hideWelcomeMessage={this.hideWelcomeMessage} />
        )}
      </>
    );
  }
}

export default App;
