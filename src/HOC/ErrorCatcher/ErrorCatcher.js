import React, { Component } from "react";

class ErrorCatcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      open: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, open: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error.toString());
    console.log(errorInfo);
  }

  render() {
    const { hasError, open } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div
        // title="Error"
        // onCloseModal={() => this.setState({open: false})}
        // modalOpen={open}
        >
          <h4 variant="subtitle1">
            The website encountered an unexpected error. Please try again later.
          </h4>
        </div>
      );
    }
    return children;
  }
}

export default ErrorCatcher;
