import React from "react";
import CodeEditor from "./CodeEditor";

const CreatingRoutes = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Creating Routes</h1>
      <p className="mb-4">
        Follow the steps below to create custom API routes for your FastAPI
        application. Use the code editor to practice and test your routes.
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li className="mb-2">
          Start by defining a new route in your <code>main.py</code> file. Use
          the{" "}
          <code>
            @app.<em>method</em>
          </code>{" "}
          decorator, where{" "}
          <code>
            <em>method</em>
          </code>{" "}
          can be GET, POST, PUT, DELETE, etc.
        </li>
        <li className="mb-2">
          Add a function that handles the request for the route. The function
          name should be descriptive of the action it performs.
        </li>
        <li className="mb-2">
          Test the new route using the code editor below by selecting the HTTP
          method, setting parameters, and adding a request body if necessary.
        </li>
      </ol>
      <CodeEditor />
    </div>
  );
};

export default CreatingRoutes;
