import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newTextUp = text.toUpperCase();
    setText(newTextUp);
    props.showAlert("Your text converted to Upper Case", "success");
  };

  const handleLowClick = () => {
    let newTextLow = text.toLowerCase();
    setText(newTextLow);
    props.showAlert("Your text converted to Lower Case", "success");
  };

  const handleCapClick = () => {
    let capText = text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    setText(capText);
    props.showAlert(
      "Each words's first letter is converted to Upper Case",
      "success"
    );
  };

  const handleClearClick = () => {
    let newTextLow = "";
    setText(newTextLow);
    props.showAlert("Text gets Cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  //other programmers logic to add new functionalities

  const CopyBtn = () => {
    let textFromTextArea = document.getElementById("my-box");
    textFromTextArea.select();
    navigator.clipboard.writeText(textFromTextArea.value);
    props.showAlert("Text copied to clipboard", "success");
  };

  const RmBtn = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };

  //counting total words logic with space bug fixing

  const wordCounter = (s) => {
    s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1

    s = s.replace(/\n/, "\n"); // exclude newline with a start spacing
    // return s.split(" ").filter(function (str) {
    //   return str != "";
    // }).length;
    return s.split(" ").filter(String).length; //- this can also be used
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1
            className={`my-3 text-${props.mode == "light" ? "dark" : "light"}`}
          >
            Enter text to Analyze
          </h1>

          <textarea
            className="form-control"
            id="my-box"
            rows="8"
            style={{
              backgroundColor:
                props.mode == "light"
                  ? "white"
                  : props.mode == "dark"
                  ? "#1c1f22"
                  : props.mode == "blue"
                  ? "#0c1e34"
                  : "#104647",
              color: props.mode == "light" ? "#1c1f22" : "white",
            }}
            value={text}
            onChange={handleOnChange}
            placeholder={props.placeholderHeading}
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.mode === "light"
              ? "primary"
              : props.mode == "dark"
              ? "secondary"
              : ""
          }  bg-${
            props.mode === "green"
              ? "green"
              : props.mode == "blue"
              ? "blue"
              : ""
          } mx-3`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "light"
              ? "primary"
              : props.mode == "dark"
              ? "secondary"
              : ""
          }  bg-${
            props.mode === "green"
              ? "green"
              : props.mode == "blue"
              ? "blue"
              : ""
          } mx-3`}
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "light"
              ? "primary"
              : props.mode == "dark"
              ? "secondary"
              : ""
          }  bg-${
            props.mode === "green"
              ? "green"
              : props.mode == "blue"
              ? "blue"
              : ""
          } mx-3`}
          onClick={handleCapClick}
        >
          Capitalize First Letter
        </button>
        <button
          className={`btn btn-${
            props.mode === "light"
              ? "primary"
              : props.mode == "dark"
              ? "secondary"
              : ""
          }  bg-${
            props.mode === "green"
              ? "green"
              : props.mode == "blue"
              ? "blue"
              : ""
          } mx-3`}
          onClick={handleClearClick}
        >
          Clear Text
        </button>

        {/* Integrating others logic */}
        <button
          className={`btn btn-${
            props.mode === "light"
              ? "primary"
              : props.mode == "dark"
              ? "secondary"
              : ""
          }  bg-${
            props.mode === "green"
              ? "green"
              : props.mode == "blue"
              ? "blue"
              : ""
          } mx-3`}
          onClick={CopyBtn}
        >
          Copy Text
        </button>

        <button
          className={`btn btn-${
            props.mode === "light"
              ? "primary"
              : props.mode == "dark"
              ? "secondary"
              : ""
          } bg-${
            props.mode === "green"
              ? "green"
              : props.mode == "blue"
              ? "blue"
              : ""
          } mx-3`}
          onClick={RmBtn}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container">
        <h2 className={`my-3 text-${props.mode == "light" ? "dark" : "light"}`}>
          Text Summary
        </h2>
        <p className={`mx-3 text-${props.mode == "light" ? "dark" : "light"}`}>
          Your text has {wordCounter(text)} words and {text.length} characters.
        </p>
        <p className={`mx-3 text-${props.mode == "light" ? "dark" : "light"}`}>
          It is an {0.008 * text.split(" ").length} minutes read.
        </p>

        <h2 className={`my-3 text-${props.mode == "light" ? "dark" : "light"}`}>
          Preview of Text
        </h2>
        <p className={`mx-3 text-${props.mode == "light" ? "dark" : "light"}`}>
          {text.length > 0
            ? text
            : "Enter some text above to see the preview here..."}
        </p>
      </div>
    </>
  );
}

export default TextForm;
