import React from "react";
import CodeEditor from "./CodeEditor";

const CreatingRoutes = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Creating Routes</h1>
      <p className="mb-4">
        Follow the steps below to create custom API routes for your FastAPI
        application. Use the interactive API request tool to practice and test
        your routes.
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li className="mb-2">
          Start by defining a new route in your <code>main.py</code> file. Use
          the{" "}
          <code>
            @app.<em>method</em>
          </code>{" "}
          decorator, where <em>method</em> can be GET, POST, PUT, DELETE, PATCH,
          etc.
        </li>
        <li className="mb-2">
          Add a function that handles the request for the route. The function
          name should be descriptive of the action it performs.
        </li>
        <li className="mb-2">
          Test the new route using the interactive API request tool below by
          selecting the HTTP method, setting parameters, and adding a request
          body if necessary.
        </li>
      </ol>

      <h2 className="text-2xl font-bold mb-4">
        Using the Interactive API Request Tool
      </h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Step 1: Select HTTP Method
        </h3>
        <p className="mb-2">
          Choose the HTTP method you want to test from the dropdown menu. The
          available methods are GET, POST, PUT, DELETE, and PATCH.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Step 2: Set Parameters</h3>
        <p className="mb-2">
          If your selected method requires parameters (e.g., GET, PUT, DELETE,
          PATCH), enter the ID value in the input field. For example, if you're
          testing a GET request to retrieve a CEO by ID, enter the ID value.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Step 3: Add Request Body (if applicable)
        </h3>
        <p className="mb-2">
          For methods that require a request body (e.g., POST, PUT, PATCH), you
          can enter a custom body by typing in the body content. The body should
          be in JSON format.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Step 4: Execute the Request
        </h3>
        <p className="mb-2">
          Click the "Execute" button to send the request to the server. If the
          request is successful, the response will be displayed below. If there
          is an error, the error message will be shown instead.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Loader Animation</h3>
        <p className="mb-2">
          When you click "Execute", a loader animation will appear indicating
          that the request is being processed. The loader will disappear once
          the request is complete, and the response will be displayed.
        </p>
      </div>

      <CodeEditor />
    </div>
  );
};

export default CreatingRoutes;
