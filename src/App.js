import "./App.css";
import ConsumerComponenet from "./components/ConsumerComponent";
// import React, { createContext } from "react";
import DemoComponent from "./components/DemoComponent";
import TestComponent from "./components/TestComponent";
import { demoContext } from "./contexts/DemoContext";
import ErrorBoundary from "./Errors/ErrorBoundary";

// const demoContext = createContext("Demo value");

const App = () => {
  return (
    <div className="App">
      <demoContext.Provider value={{ suth: "logedIn", permissions: "null" }}>
        {/* <DemoComponent />
        <ConsumerComponenet /> */}
        <ErrorBoundary>
          <TestComponent />
        </ErrorBoundary>
      </demoContext.Provider>
    </div>
  );
};

export default App;
