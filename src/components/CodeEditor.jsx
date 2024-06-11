import React, { useState } from "react";

const CodeEditor = () => {
  const [response, setResponse] = useState(null);
  const [method, setMethod] = useState("POST");
  const [param, setParam] = useState("1");
  const [header, setHeader] = useState("application/json");
  const [body, setBody] = useState(
    '{"name": "John Doe", "company": "Example Corp"}'
  );

  const methodOptions = ["GET", "POST", "PUT", "DELETE"];
  const paramOptions = ["1", "2", "3"];
  const headerOptions = ["application/json", "application/xml"];
  const bodyOptions = [
    '{"name": "John Doe", "company": "Example Corp"}',
    '{"name": "Jane Smith", "company": "Another Corp"}',
    '{"name": "Mike Johnson", "company": "Some Corp"}',
  ];

  const executeCode = async () => {
    try {
      const url = `http://127.0.0.1:8000/ceos/${param}`;
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": header,
        },
        body: body ? JSON.stringify(JSON.parse(body)) : undefined,
      });

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
      <div className="mb-4">
        <label className="block mb-2">Select Param:</label>
        <select
          className="p-2 border rounded"
          value={param}
          onChange={(e) => setParam(e.target.value)}
        >
          {paramOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Select Header:</label>
        <select
          className="p-2 border rounded"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        >
          {headerOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Select Body:</label>
        <select
          className="p-2 border rounded"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        >
          {bodyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Request Details:</h2>
        <pre className="bg-gray-100 p-4 rounded">
          {`fetch("http://127.0.0.1:8000/ceos/${param}", {
  method: "${method}",
  headers: {
    "Content-Type": "${header}",
  },
  body: ${body ? JSON.stringify(JSON.parse(body), null, 2) : "undefined"},
});`}
        </pre>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">API Route:</h2>
        <pre className="bg-gray-100 p-4 rounded">
          {`@app.${method.toLowerCase()}("/ceos/${param}")
def handle_ceo(ceo_id: int, ceo: schemas.CEOCreate = Body(...), db: Session = Depends(get_db)):
    return crud.create_ceo(db=db, ceo=ceo)`}
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