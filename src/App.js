// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import Formtext from "./component/Formtext";
import { useState } from "react";
import {BrowserRouter as Router, Route, } from "react-router-dom" 
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  const [mode, setMode] = useState("light");

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "black";
    } else {
      setMode("light");
      document.body.style.background = "white";
    }
  };
  return (
    <>
    <Router>
    <Route>
      <Navbar about="ABOUT-US" home="Home" mode={mode} handleMode={handleMode}/></Route>
      <div className="container">

        <Route exact path="/">
              <Formtext mode={mode} />
           </Route>

            <Route exact path="/about">
              <About  mode={mode} dlt="delete"/>
            </Route>
           
            <Route path="/contact">
             <Contact mode={mode}/>
          </Route>
          </div>
        </Router>
        

    </>
  );
}

export default App;
