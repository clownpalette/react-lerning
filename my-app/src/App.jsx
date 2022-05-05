
import React from "react";
import "./css/App.css";
import "./css/Sidebar.css";
import "./css/Headerbar.css";
import Sidebar from "./components/Sidebar";
import About from './components/scene/About';




function App(){
     return (
        <>
        
        <Sidebar /> 
        <About /> 
        
      </> 
    );
};
export default App;