import React from "react";
import CodeEditor from "./CodeEditor";

const CRUDOperations = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">CRUD Operations</h1>
      <p className="mb-4">
        Use the code editor below to practice CRUD operations:
      </p>
      <CodeEditor />
    </div>
  );
};

export default CRUDOperations;
