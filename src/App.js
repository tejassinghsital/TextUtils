import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import React, { useState } from "react";

//using router dom in react
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
//adding about page without loading using router dom
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#1c1f22";
  //     showAlert("Dark Mode has been enabled", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light Mode has been enabled", "success");
  //   }
  // };

  //different mode themes

  const lightToggle = () => {
    setMode("light");
    document.body.style.backgroundColor = "white";
    showAlert("Light Mode has been enabled", "success");
    document.title = "TextUtils - Light Mode";
  };

  const darkToggle = () => {
    setMode("dark");
    document.body.style.backgroundColor = "#1c1f22";
    showAlert("Dark Mode has been enabled", "success");
    document.title = "TextUtils - Dark Mode";
  };

  const blueToggle = () => {
    setMode("blue");
    document.body.style.backgroundColor = "#0c1e34";
    showAlert("Blue Mode has been enabled", "success");
    document.title = "TextUtils - Blue Mode";
  };

  const greenToggle = () => {
    setMode("green");
    document.body.style.backgroundColor = "#104647";
    showAlert("Green Mode has been enabled", "success");
    document.title = "TextUtils - Green Mode";
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TEXTUTILS"
          mode={mode}
          // toggleMode={toggleMode}
          lightToggle={lightToggle}
          darkToggle={darkToggle}
          blueToggle={blueToggle}
          greenToggle={greenToggle}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  placeholderHeading="Enter your Text to Analyze here"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            /> */}
<TextForm
                  placeholderHeading="Enter your Text to Analyze here"
                  mode={mode}
                  showAlert={showAlert}
                />
            {/* <Route exact path="/about" element={<About />} />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
