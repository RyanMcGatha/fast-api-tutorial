import React from "react";
import CodeEditor from "../pages/CodeEditor";

const Tutorial = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">FastAPI Tutorial</h1>
      <p className="mb-4">
        Follow the instructions below to create your own FastAPI routes.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">
          Step 1: Install FastAPI and Uvicorn
        </h2>
        <pre className="bg-gray-100 p-2 rounded">
          pip install fastapi uvicorn
        </pre>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Step 2: Create a FastAPI App</h2>
        <p className="mb-2">
          Use the code editor below to write your FastAPI routes.
        </p>
        <CodeEditor />
      </div>
    </div>
  );
};

export default Tutorial;
