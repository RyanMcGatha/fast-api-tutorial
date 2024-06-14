import React, { useState } from "react";

const CodeEditor = () => {
  const [response, setResponse] = useState(null);
  const [method, setMethod] = useState("POST");
  const [paramType, setParamType] = useState("id");
  const [paramValue, setParamValue] = useState(1);
  const [body, setBody] = useState(
    '{"name": "John Doe", "company": "Example Corp"}'
  );
  const [useCustomBody, setUseCustomBody] = useState(false);

  const methodOptions = ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"];
  const paramOptions = ["id", "name", "company"];
  const bodyOptions = [
    '{"name": "John Doe", "company": "Example Corp"}',
    '{"name": "Jane Smith", "company": "Another Corp"}',
    '{"name": "Mike Johnson", "company": "Some Corp"}',
    '{"name": "Emily Davis", "company": "Tech Solutions"}',
    '{"name": "William Brown", "company": "Innovate Inc"}',
    '{"name": "Natalie Lee", "company": "Global Corp"}',
    '{"name": "Chris Wilson", "company": "Enterprise LLC"}',
    '{"name": "Laura Taylor", "company": "Design Studio"}',
  ];

  const executeCode = async () => {
    try {
      const endpoint = paramType === "id" ? "id" : "name";
      const parsedParamValue =
        paramType === "id" ? parseInt(paramValue, 10) : paramValue;
      const url = `https://fast-api-tutorial-backend.vercel.app/ceos/${endpoint}/${parsedParamValue}`;
      const options = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (method !== "GET" && method !== "DELETE") {
        options.body = JSON.stringify(JSON.parse(body));
      }

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      setResponse(responseData);
    } catch (error) {
      setResponse({ error: error.message });
    }
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-2">Select Method:</label>
        <select
          className="p-2 border rounded"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          {methodOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {method !== "POST" && (
        <div className="mb-4">
          <label className="block mb-2">Select Param:</label>
          <select
            className="p-2 border rounded"
            value={paramType}
            onChange={(e) => setParamType(e.target.value)}
          >
            {paramOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
      {method !== "POST" && (
        <div className="mb-4">
          {paramType === "id" ? (
            <>
              <label className="block mb-2">Enter ID:</label>
              <input
                type="number"
                className="p-2 border rounded w-full"
                value={paramValue}
                onChange={(e) => setParamValue(e.target.value)}
              />
            </>
          ) : (
            <>
              <label className="block mb-2">
                Enter {paramType.charAt(0).toUpperCase() + paramType.slice(1)}:
              </label>
              <input
                type="text"
                className="p-2 border rounded w-full"
                value={paramValue}
                onChange={(e) => setParamValue(e.target.value)}
              />
            </>
          )}
        </div>
      )}
      {method !== "GET" && method !== "DELETE" && (
        <div className="mb-4">
          <label className="block mb-2">Select Body:</label>
          <select
            className="p-2 border rounded"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            disabled={useCustomBody}
          >
            {bodyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={useCustomBody}
              onChange={() => setUseCustomBody(!useCustomBody)}
            />
            <label>Use Custom Body</label>
          </div>
          {useCustomBody && (
            <textarea
              className="p-2 border rounded w-full mt-2"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="5"
            />
          )}
        </div>
      )}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Request Details:</h2>
        <pre className="bg-gray-100 p-4 rounded">
          {`fetch("https://fast-api-tutorial-backend.vercel.app/ceos/${
            method === "POST" ? "" : paramType === "id" ? "id" : "name"
          }/${paramValue}", {
  method: "${method}",
  headers: {
    "Content-Type": "application/json",
  },
  ${
    method !== "GET" && method !== "DELETE"
      ? `body: ${JSON.stringify(JSON.parse(body), null, 2)}`
      : ""
  }
});`}
        </pre>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">API Route:</h2>
        <pre className="bg-gray-100 p-4 rounded">
          {`@app.${method.toLowerCase()}("/ceos/${
            method === "POST"
              ? ""
              : paramType === "id"
              ? "{ceo_id}"
              : "{ceo_name}"
          }")
def create_ceo(ceo_${paramType}: ${paramType === "id" ? "int" : "str"}):
    return create_ceo`}
        </pre>
      </div>
      <button
        onClick={executeCode}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Execute
      </button>
      {response && (
        <pre className="bg-gray-100 p-4 rounded mt-4">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default CodeEditor;
