import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GeneralProvider } from "./context/generalContext";

ReactDOM.render(
    <GeneralProvider>
        <App />
    </GeneralProvider>,
    document.getElementById("root")
);
