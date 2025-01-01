import React, { useState } from "react";
import { executeCode } from "../api";
import "./Output.css"; // Import the CSS file

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null); // Holds the output of the executed code
  const [isLoading, setIsLoading] = useState(false); // Tracks loading state
  const [isError, setIsError] = useState(false); // Tracks error state

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue(); // Fetch code from editor
    if (!sourceCode) return;

    try {
      setIsLoading(true); // Set loading state before executing the code
      const { run: result } = await executeCode(language, sourceCode); // Execute the code via API
      setOutput(result.output.split("\n")); // Split output by lines and set state
      setIsError(!!result.stderr); // Check if there's an error in the result
    } catch (error) {
      console.error(error);
      setIsError(true);
      setOutput([error.message || "Unable to run code"]);
    } finally {
      setIsLoading(false); // Reset loading state after execution
    }
  };

  return (
    <div className="output-container">
      <h2>Output</h2>
      <div className="btn-head">
        <button
          className={`run-code-btn ${isLoading ? "loading" : ""}`}
          onClick={runCode}
          disabled={isLoading}
        >
          {isLoading ? "Running..." : "Run Code"}
        </button>
      </div>
      <div className={`output-box ${isError ? "error" : ""}`}>
        {output ? output.map((line, i) => <div key={i}>{line}</div>) : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

export default Output;
