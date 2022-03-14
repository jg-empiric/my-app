import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode enable or not

  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Jenish" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exat path="/about">
            <About mode={mode} />
          </Route>

          <Route exat path="/">
            <TextForm showAlert={showAlert} heading="Enter the text analyze below" mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
