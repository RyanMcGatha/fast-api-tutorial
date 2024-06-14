import React from "react";

const DatabaseSetup = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Database Setup</h1>
      <p className="mb-4">Follow these steps to set up your database:</p>
      <pre className="bg-gray-100 p-4 rounded">
        {`# Example using SQLAlchemy
pip install sqlalchemy databases psycopg2-binary`}
      </pre>
    </div>
  );
};

export default DatabaseSetup;
