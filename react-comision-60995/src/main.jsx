import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGev5p_dDdM75FWpDt7LacpvsZ_L3Bnyo",
  authDomain: "proyecto-final-react-c878c.firebaseapp.com",
  projectId: "proyecto-final-react-c878c",
  storageBucket: "proyecto-final-react-c878c.appspot.com",
  messagingSenderId: "557347125294",
  appId: "1:557347125294:web:9049d4faf4609d17b547bf",
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
