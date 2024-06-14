import React, { useState } from "react";
import "../index.css";

const CodeEditor = () => {
  const [response, setResponse] = useState(null);
  const [method, setMethod] = useState("POST");
  const [paramType, setParamType] = useState("id");
  const [paramValue, setParamValue] = useState("");
  const [body, setBody] = useState(
    '{"name": "John Doe", "company": "Example Corp"}'
  );
  const [useCustomBody, setUseCustomBody] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const methodOptions = ["GET", "POST", "PUT", "DELETE", "PATCH"];
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

  const getMethodInstructions = (method) => {
    switch (method) {
      case "GET":
        return (
          <>
            <h3 className="text-lg font-bold">GET Method</h3>
            <p className="mb-2">
              The GET method is used to retrieve data from the server. When you
              use the GET method, you should define a route and a function that
              handles the retrieval of data.
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              {`@app.get("/ceos/id/{ceo_id}")
def get_ceo_by_id(ceo_id: int, db: Session = Depends(get_db)):
    ceo = crud.get_ceo_by_id(db, ceo_id)
    if not ceo:
        raise HTTPException(status_code=404, detail="CEO not found")
    return ceo`}
            </pre>
          </>
        );
      case "POST":
        return (
          <>
            <h3 className="text-lg font-bold">POST Method</h3>
            <p className="mb-2">
              The POST method is used to create a new resource on the server.
              When using POST, you need to define a route and a function that
              handles the creation of the resource.
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              {`@app.post("/ceos")
def create_ceo(ceo: schemas.CEOCreate, db: Session = Depends(get_db)):
    return crud.create_ceo(db=db, ceo=ceo)`}
            </pre>
          </>
        );
      case "PUT":
        return (
          <>
            <h3 className="text-lg font-bold">PUT Method</h3>
            <p className="mb-2">
              The PUT method is used to update an existing resource on the
              server. When using PUT, you should define a route and a function
              that handles the update of the resource.
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              {`@app.put("/ceos/id/{ceo_id}")
def update_ceo_by_id(ceo_id: int, ceo: schemas.CEOUpdate, db: Session = Depends(get_db)):
    return crud.update_ceo_by_id(db=db, ceo_id=ceo_id, ceo=ceo)`}
            </pre>
          </>
        );
      case "DELETE":
        return (
          <>
            <h3 className="text-lg font-bold">DELETE Method</h3>
            <p className="mb-2">
              The DELETE method is used to delete a resource from the server.
              When using DELETE, you should define a route and a function that
              handles the deletion of the resource.
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              {`@app.delete("/ceos/id/{ceo_id}")
def delete_ceo(ceo_id: int, db: Session = Depends(get_db)):
    return crud.delete_ceo(db=db, ceo_id=ceo_id)`}
            </pre>
          </>
        );
      case "PATCH":
        return (
          <>
            <h3 className="text-lg font-bold">PATCH Method</h3>
            <p className="mb-2">
              The PATCH method is used to partially update an existing resource
              on the server. When using PATCH, you should define a route and a
              function that handles the partial update of the resource.
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              {`@app.patch("/ceos/id/{ceo_id}")
def patch_ceo_by_id(ceo_id: int, ceo: schemas.CEOPatch, db: Session = Depends(get_db)):
    return crud.patch_ceo_by_id(db=db, ceo_id=ceo_id, ceo=ceo)`}
            </pre>
          </>
        );
      default:
        return null;
    }
  };

  const executeCode = async () => {
    setIsLoading(true);
    try {
      let url;
      if (method === "POST") {
        url = `https://fast-api-tutorial-backend.vercel.app/ceos`;
      } else {
        const endpoint = paramType === "id" ? "id" : "name";
        const parsedParamValue =
          paramType === "id"
            ? parseInt(paramValue, 10)
            : encodeURIComponent(paramValue);
        url = `https://fast-api-tutorial-backend.vercel.app/ceos/${endpoint}/${parsedParamValue}`;
      }

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
    } finally {
      setIsLoading(false);
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
        <h2 className="text-xl font-bold">Method Instructions:</h2>
        {getMethodInstructions(method)}
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
                onBlur={(e) => setParamValue(e.target.value)}
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
      <button
        onClick={executeCode}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        disabled={isLoading}
      >
        Execute
      </button>
      <h2 className="mt-4 text-xl font-bold">Api Response:</h2>

      {isLoading && (
        <div className="mb-4 flex justify-center">
          <div className="loader"></div>
        </div>
      )}
      {response && (
        <pre className="bg-gray-100 p-4 rounded mt-4">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Request Details:</h2>
        <pre className="bg-gray-100 p-4 rounded">
          {`fetch("https://fast-api-tutorial-backend.vercel.app/ceos${
            method === "POST"
              ? ""
              : paramType === "id"
              ? `/id/${paramValue}`
              : `/name/${paramValue}`
          }", {
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
          {`@app.${method.toLowerCase()}("/ceos${
            method === "POST"
              ? ""
              : paramType === "id"
              ? "/{ceo_id}"
              : "/{ceo_name}"
          }")
def ${method.toLowerCase()}_ceo(ceo_${paramType}: ${
            paramType === "id" ? "int" : "str"
          }):
    return ${method.toLowerCase()}_ceo`}
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;
