import React, { useState, useEffect, useContext } from "react";
import { demoContext } from "../contexts/DemoContext";
import axios from "axios";
import TestComponent from "./TestComponent";

const DemoComponent = () => {
  const API_LINK = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const appcontext = useContext(demoContext);
  console.log("appContext =>", appcontext);
  useEffect(() => {
    (async function callApi() {
      try {
        const apiResponse = await axios.get(API_LINK);
        setData(apiResponse.data);
        console.log("API response =>", apiResponse);
      } catch (error) {
        console.log("Error :", error);
      }
    })();
  }, []);
  return (
    <React.Fragment>
      <h1>Welcome to demo project.</h1>
      {data?.map((user, index) => {
        return <p key={index}>{user.email}</p>;
      })}
      <TestComponent />
    </React.Fragment>
  );
};

export default DemoComponent;
