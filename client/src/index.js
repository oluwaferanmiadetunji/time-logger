import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import axios from "axios";
import Loader from "components/loader";

// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <SoftUIControllerProvider>
        <App />
      </SoftUIControllerProvider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
