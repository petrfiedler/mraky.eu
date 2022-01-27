import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SidebarProvider } from "./context/sidebarContext";

ReactDOM.render(
    <SidebarProvider>
        <App />
    </SidebarProvider>,
    document.getElementById("root")
);
