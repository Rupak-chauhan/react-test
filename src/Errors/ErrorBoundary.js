import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError = (error) => {
    console.log("Error =>", error);
    return { isError: error };
  };

  componentDidCatch(error, errorInfo) {
    console.warn("Error is", error, "Error Info =>", errorInfo);
  }

  render() {
    console.log("state", this.state.isError);
    if (this.state.isError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
