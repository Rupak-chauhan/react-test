import React from "react";
import { demoContext } from "../contexts/DemoContext";

const ConsumerComponenet = () => {
  return (
    <React.Fragment>
      <h1>Demo Consumer Component.</h1>
      <demoContext.Consumer>
        {(contextObj) =>
          contextObj.suth === "logedIn" ? (
            <h2>loggedin</h2>
          ) : (
            <h2>not logged in</h2>
          )
        }
      </demoContext.Consumer>
      <h4>hii</h4>
    </React.Fragment>
  );
};

export default ConsumerComponenet;
