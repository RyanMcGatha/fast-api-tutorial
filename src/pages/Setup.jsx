import React, { useState } from "react";

const Setup = () => {
  const [activeSection, setActiveSection] = useState("overview");
  let user_id;

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "main", label: "main.py Setup" },
    { id: "database", label: "database.py Setup" },
    { id: "summary", label: "Summary" },
    { id: "postgresql", label: "Connecting to PostgreSQL" },
    { id: "models", label: "Creating Models" },
    { id: "schemas", label: "Creating Schemas" },
    { id: "crud", label: "Creating CRUD Operations" },
    { id: "api", label: "Creating API Endpoints" },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="flex">
      <nav className="w-1/4 bg-gray-200 p-4">
        <ul className="space-y-2 flex flex-col">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => setActiveSection(section.id)}
                className={`block w-full text-left p-2 rounded text-black ${
                  activeSection === section.id ? "bg-gray-400" : "bg-gray-200"
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-3/4 p-4">
        {activeSection === "overview" && (
          <div>
            <h1 className="text-2xl font-bold">Setup</h1>
            <p className="mb-4">
              Run these commands in your terminal to start your FastAPI project:
            </p>
            <div className="flex flex-col gap-5">
              <pre className="bg-gray-300 p-4 rounded relative">
                <button
                  onClick={() => handleCopy("mkdir fastapi-tutorial")}
                  className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
                >
                  Copy
                </button>
                {`mkdir fastapi-tutorial`}
              </pre>
              <pre className="bg-gray-300 p-4 rounded relative">
                <button
                  onClick={() => handleCopy("cd fastapi-tutorial")}
                  className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
                >
                  Copy
                </button>
                {`cd fastapi-tutorial`}
              </pre>
              <pre className="bg-gray-300 p-4 rounded relative">
                <button
                  onClick={() =>
                    handleCopy(
                      "pip install fastapi uvicorn sqlalchemy psycopg2-binary"
                    )
                  }
                  className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
                >
                  Copy
                </button>
                {`pip install fastapi uvicorn sqlalchemy psycopg2-binary`}
              </pre>
              <pre className="bg-gray-300 p-4 rounded relative">
                <button
                  onClick={() => handleCopy("touch main.py")}
                  className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
                >
                  Copy
                </button>
                {`touch main.py`}
              </pre>
              <pre className="bg-gray-300 p-4 rounded relative">
                <button
                  onClick={() => handleCopy("touch database.py")}
                  className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
                >
                  Copy
                </button>
                {`touch database.py`}
              </pre>
              <pre className="bg-gray-300 p-4 rounded relative">
                <button
                  onClick={() => handleCopy("uvicorn main:app --reload")}
                  className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
                >
                  Copy
                </button>
                {`uvicorn main:app --reload`}
              </pre>
            </div>
            <button
              onClick={() => setActiveSection("database")}
              className="bg-blue-500 text-white p-2 rounded mt-4"
            >
              Next
            </button>
          </div>
        )}

        {activeSection === "main" && (
          <div>
            <h1 className="text-2xl font-bold">main.py Setup</h1>
            <p className="mb-4">
              Copy the following code into your <code>main.py</code> file:
            </p>
            <pre className="bg-gray-300 p-4 rounded relative">
              <button
                onClick={() =>
                  handleCopy(`from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from .database import SessionLocal, Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root(db: Session = Depends(get_db)):
    return {"Hello": "World"}`)
                }
                className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
              >
                Copy
              </button>
              {`from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from .database import SessionLocal, Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root(db: Session = Depends(get_db)):
    return {"Hello": "World"}`}
            </pre>
          </div>
        )}

        {activeSection === "database" && (
          <div>
            <h1 className="text-2xl font-bold">database.py Setup</h1>
            <p className="mb-4">
              Create a new <code>database.py</code> file in your project's root
              directory:
            </p>
            <pre className="bg-gray-300 p-4 rounded relative">
              <button
                onClick={() =>
                  handleCopy(`from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "postgresql://<username>:<password>@<host>:<port>/<database_name>"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()`)
                }
                className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
              >
                Copy
              </button>
              {`from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "postgresql://<username>:<password>@<host>:<port>/<database_name>"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()`}
            </pre>
            <p className="mb-4">
              Replace the <code>SQLALCHEMY_DATABASE_URL</code> value with your
              PostgreSQL connection string.
            </p>
            <button
              onClick={() => setActiveSection("postgresql")}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Don't have a connection string?
            </button>
            <p className="mb-4">
              Your PostgreSQL connection string should look like this:
            </p>
            <pre className="bg-gray-300 p-4 rounded relative">
              <button
                onClick={() =>
                  handleCopy(
                    `SQLALCHEMY_DATABASE_URL = "postgresql://<username>:<password>@<host>:<port>/<database_name>"`
                  )
                }
                className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
              >
                Copy
              </button>
              {`SQLALCHEMY_DATABASE_URL = "postgresql://<username>:<password>@<host>:<port>/<database_name>"`}
            </pre>
            <p className="mb-4">
              For example, if your username is <code>postgres</code>, your
              password is <code>yourpassword</code>, your host is{" "}
              <code>localhost</code>, your port is <code>5432</code>, and your
              database name is <code>mydatabase</code>, the connection string
              would be:
            </p>
            <pre className="bg-gray-300 p-4 rounded relative">
              <button
                onClick={() =>
                  handleCopy(
                    `SQLALCHEMY_DATABASE_URL = "postgresql://postgres:yourpassword@localhost:5432/mydatabase"`
                  )
                }
                className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
              >
                Copy
              </button>
              {`SQLALCHEMY_DATABASE_URL = "postgresql://postgres:yourpassword@localhost:5432/mydatabase"`}
            </pre>
            <p className="mb-4">
              Don't have a connection string? Click the button below for
              instructions on setting up PostgreSQL and obtaining your
              connection string.
            </p>
            <button
              onClick={() => setActiveSection("summary")}
              className="bg-blue-500 text-white p-2 rounded mt-4"
            >
              Next
            </button>
          </div>
        )}

        {activeSection === "summary" && (
          <div>
            <h1 className="text-2xl font-bold">Summary</h1>
            <p className="mb-4">
              If you have followed the steps correctly, you have successfully
              set up a minimal FastAPI project connected to a PostgreSQL
              database. Here’s a recap of what you have done:
            </p>
            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-semibold">
                1. Project Initialization
              </h2>
              <p className="mb-4">
                You created a new directory for your project and navigated into
                it:
              </p>

              <h2 className="text-xl font-semibold">
                2. Installed Necessary Dependencies
              </h2>
              <p className="mb-4">
                You installed FastAPI, Uvicorn, SQLAlchemy, and psycopg2-binary:
              </p>

              <h2 className="text-xl font-semibold">
                3. Created Essential Files
              </h2>
              <p className="mb-4">
                You created the main application file and the database
                configuration file:
              </p>

              <h2 className="text-xl font-semibold">
                4. Configured Database Connection
              </h2>
              <p className="mb-4">
                In <code>database.py</code>, you set up the connection to your
                PostgreSQL database using SQLAlchemy:
              </p>

              <h2 className="text-xl font-semibold">
                5. Set Up FastAPI Application
              </h2>
              <p className="mb-4">
                In <code>main.py</code>, you initialized the FastAPI app and set
                up the root endpoint:
              </p>

              <h2 className="text-xl font-semibold">6. Ran the Application</h2>
              <p className="mb-4">
                You ran the FastAPI application using Uvicorn to see your API in
                action:
              </p>

              <h2 className="text-xl font-semibold">Next Steps</h2>
              <p className="mb-4">
                Now that your FastAPI project is set up and connected to a
                PostgreSQL database, you can start learning to create custom API
                routes to expand your application.
              </p>
              <button
                onClick={() => setActiveSection("creating-routes")}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Learn to Create Custom API Routes
              </button>
            </div>
          </div>
        )}

        {activeSection === "postgresql" && (
          <div>
            <h1 className="text-2xl font-bold">Connecting to PostgreSQL</h1>

            <h2 className="text-xl font-bold mt-4">
              Step 1: Install PostgreSQL
            </h2>
            <p className="mb-4">
              To install PostgreSQL, follow the steps for your operating system:
            </p>

            <h3 className="text-lg font-semibold">On macOS:</h3>
            <ol className="list-decimal ml-6 mb-4">
              <li>
                Install PostgreSQL using Homebrew:
                <pre className="bg-gray-300 p-2 rounded relative">
                  <button
                    onClick={() => handleCopy("brew install postgresql")}
                    className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
                  >
                    Copy
                  </button>
                  brew install postgresql
                </pre>
              </li>
              <li>
                Start the PostgreSQL service:
                <pre className="bg-gray-300 p-2 rounded relative">
                  <button
                    onClick={() => handleCopy("brew services start postgresql")}
                    className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
                  >
                    Copy
                  </button>
                  brew services start postgresql
                </pre>
              </li>
              <li>
                Create a default PostgreSQL user:
                <pre className="bg-gray-300 p-2 rounded relative">
                  <button
                    onClick={() => handleCopy("createuser --interactive")}
                    className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
                  >
                    Copy
                  </button>
                  createuser --interactive
                </pre>
              </li>
            </ol>

            <h2 className="text-xl font-bold mt-4">
              Step 2: Create a New Database
            </h2>
            <p className="mb-4">
              Once PostgreSQL is installed, you can create a new database:
            </p>

            <h3 className="text-lg font-semibold">Using the Command Line:</h3>
            <ol className="list-decimal ml-6 mb-4">
              <li>Open a terminal or command prompt.</li>
              <li>
                Access the PostgreSQL prompt (you might need to switch to the{" "}
                <code>postgres</code> user first):
                <pre className="bg-gray-300 p-2 rounded relative">
                  <button
                    onClick={() => handleCopy("psql -U postgres")}
                    className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
                  >
                    Copy
                  </button>
                  psql -U postgres
                </pre>
              </li>
              <li>
                Create a new database:
                <pre className="bg-gray-300 p-2 rounded relative">
                  <button
                    onClick={() => handleCopy("CREATE DATABASE mydatabase;")}
                    className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
                  >
                    Copy
                  </button>
                  CREATE DATABASE mydatabase;
                </pre>
              </li>
              <li>
                Exit the PostgreSQL prompt:
                <pre className="bg-gray-300 p-2 rounded relative">
                  <button
                    onClick={() => handleCopy("\\q")}
                    className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
                  >
                    Copy
                  </button>
                  \q
                </pre>
              </li>
            </ol>

            <h3 className="text-lg font-semibold">Using Postico 2:</h3>
            <ol className="list-decimal ml-6 mb-4">
              <li>
                Download and install Postico 2 from the{" "}
                <a
                  href="https://eggerapps.at/postico2/"
                  className="text-blue-500 underline"
                >
                  official website
                </a>
                .
              </li>
              <li>
                Open Postico 2 and connect to your PostgreSQL server by clicking
                on the "New Favorite" button and filling in your connection
                details (Host: <code>localhost</code>, Port: <code>5432</code>,
                User: <code>postgres</code>, Password: the password you set
                during PostgreSQL installation, Database: <code>postgres</code>
                ).
              </li>
              <li>Click "Connect" to connect to your PostgreSQL server.</li>
              <li>
                Once connected, click on the "Databases" tab on the sidebar.
              </li>
              <li>Click the "+" button to create a new database.</li>
              <li>Enter the new database name and click "Create".</li>
            </ol>

            <h2 className="text-xl font-bold mt-4">
              Step 3: Obtain Connection Information
            </h2>
            <p className="mb-4">
              After creating the database, you need the connection information
              to connect to it:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>
                Host: Usually <code>localhost</code> for local databases.
              </li>
              <li>
                Port: The default PostgreSQL port is <code>5432</code>.
              </li>
              <li>
                Database: The name of the database you created (e.g.,{" "}
                <code>mydatabase</code>).
              </li>
              <li>
                User: The PostgreSQL user (e.g., <code>postgres</code>).
              </li>
              <li>
                Password: The password you set during PostgreSQL installation.
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-4">
              Step 4: Connect to the Database in a FastAPI Project
            </h2>
            <p className="mb-4">
              To connect to your PostgreSQL database, replace the{" "}
              <code>SQLALCHEMY_DATABASE_URL</code> value in{" "}
              <code>database.py</code> with your PostgreSQL connection string:
            </p>
            <pre className="bg-gray-300 p-4 rounded relative">
              <button
                onClick={() =>
                  handleCopy(
                    `SQLALCHEMY_DATABASE_URL = "postgresql://<username>:<password>@<host>:<port>/<database_name>"`
                  )
                }
                className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
              >
                Copy
              </button>
              {`SQLALCHEMY_DATABASE_URL = "postgresql://<username>:<password>@<host>:<port>/<database_name>"`}
            </pre>
            <p className="mb-4">
              For example, if your username is <code>postgres</code>, your
              password is <code>yourpassword</code>, your host is{" "}
              <code>localhost</code>, your port is <code>5432</code>, and your
              database name is <code>mydatabase</code>, the connection string
              would be:
            </p>
            <pre className="bg-gray-300 p-4 rounded relative">
              <button
                onClick={() =>
                  handleCopy(
                    `SQLALCHEMY_DATABASE_URL = "postgresql://postgres:yourpassword@localhost:5432/mydatabase"`
                  )
                }
                className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
              >
                Copy
              </button>
              {`SQLALCHEMY_DATABASE_URL = "postgresql://postgres:yourpassword@localhost:5432/mydatabase"`}
            </pre>
          </div>
        )}

        {activeSection === "models" && (
          <div>
            <h1 className="text-2xl font-bold">Creating Models</h1>
            <p className="mb-4">
              Models are Python classes that represent the structure of your
              database tables. Each class variable corresponds to a table
              column. Follow the steps below to create a model:
            </p>
            <ol className="list-decimal list-inside mb-4">
              <li className="mb-2">
                Create a new file called <code>models.py</code> in your project
                directory.
              </li>
              <li className="mb-2">
                Import the necessary modules from SQLAlchemy and your database
                configuration file. SQLAlchemy is the ORM (Object-Relational
                Mapper) used to interact with the database in a Pythonic way.{" "}
                <code>Base</code> is a class from which all mapped classes
                should inherit.
              </li>
              <li className="mb-2">
                Define your model class. Each class represents a table in your
                database. Use the <code>__tablename__</code> attribute to
                specify the table name.
              </li>
              <li className="mb-2">
                Define the columns of the table. Each class variable represents
                a column and is an instance of the <code>Column</code> class.
                You can specify the column type (e.g., Integer, String) and
                other constraints (e.g., primary key, unique, indexed).
              </li>
            </ol>
            <pre className="bg-gray-300 p-4 rounded relative">
              <button
                onClick={() =>
                  handleCopy(`from sqlalchemy import Column, Integer, String
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    full_name = Column(String)`)
                }
                className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
              >
                Copy
              </button>
              {`from sqlalchemy import Column, Integer, String
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    full_name = Column(String)`}
            </pre>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Explanation</h2>
              <p className="mb-2">
                <strong>Imports:</strong> We import <code>Column</code>,{" "}
                <code>Integer</code>, and <code>String</code> from SQLAlchemy to
                define the columns of the table. We also import{" "}
                <code>Base</code> from our database configuration file.{" "}
                <code>Base</code> is the declarative base class that our models
                will inherit from.
              </p>
              <p className="mb-2">
                <strong>Class Definition:</strong> The <code>User</code> class
                represents the "users" table in the database. The{" "}
                <code>__tablename__</code> attribute specifies the table name.
              </p>
              <p className="mb-2">
                <strong>Columns:</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <code>
                      id = Column(Integer, primary_key=True, index=True)
                    </code>
                    : This defines an <code>id</code> column of type Integer. It
                    is the primary key, meaning each value in this column is
                    unique and cannot be null. The <code>index=True</code>{" "}
                    argument creates an index for faster lookups.
                  </li>
                  <li>
                    <code>email = Column(String, unique=True, index=True)</code>
                    : This defines an <code>email</code> column of type String.
                    The <code>unique=True</code> argument ensures all values in
                    this column are unique. The <code>index=True</code> argument
                    creates an index for faster lookups.
                  </li>
                  <li>
                    <code>hashed_password = Column(String)</code>: This defines
                    a <code>hashed_password</code> column of type String. It
                    will store the hashed passwords of the users.
                  </li>
                  <li>
                    <code>full_name = Column(String)</code>: This defines a{" "}
                    <code>full_name</code> column of type String. It will store
                    the full names of the users.
                  </li>
                </ul>
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Additional Tips</h2>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  Ensure that the <code>Base</code> class is imported correctly
                  from your database configuration file. The <code>Base</code>{" "}
                  class is usually created in a file named{" "}
                  <code>database.py</code>.
                </li>
                <li className="mb-2">
                  Use descriptive names for your model classes and columns to
                  make your code more readable and maintainable.
                </li>
                <li className="mb-2">
                  You can add more columns to your models as needed, specifying
                  the appropriate data types and constraints.
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeSection === "schemas" && (
          <div>
            <h1 className="text-2xl font-bold">Creating Schemas</h1>
            <p className="mb-4">
              Schemas are used to define the structure of the data you expect to
              receive or send. They help ensure data consistency and validation.
              Follow the steps below to create schemas for your FastAPI
              application:
            </p>
            <ol className="list-decimal list-inside mb-4">
              <li className="mb-2">
                Create a new file called <code>schemas.py</code> in your project
                directory.
              </li>
              <li className="mb-2">
                Import the <code>BaseModel</code> class from the Pydantic
                library. Pydantic is used for data validation and serialization
                in FastAPI.
              </li>
              <li className="mb-2">
                Define your base schema class. This class will include the
                common fields shared by other schemas.
              </li>
              <li className="mb-2">
                Create a schema class for data creation. This class extends the
                base schema and includes additional fields required for creating
                a new resource.
              </li>
              <li className="mb-2">
                Create a schema class for data retrieval. This class extends the
                base schema and includes additional fields returned by the API,
                such as the resource ID.
              </li>
              <li className="mb-2">
                Enable ORM mode in the retrieval schema class to allow
                compatibility with SQLAlchemy models.
              </li>
            </ol>
            <pre className="bg-gray-300 p-4 rounded relative">
              <button
                onClick={() =>
                  handleCopy(`from pydantic import BaseModel

class UserBase(BaseModel):
    email: str
    full_name: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int

    class Config:
        orm_mode = True`)
                }
                className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
              >
                Copy
              </button>
              {`from pydantic import BaseModel

class UserBase(BaseModel):
    email: str
    full_name: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int

    class Config:
        orm_mode = True`}
            </pre>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Explanation</h2>
              <p className="mb-2">
                <strong>Imports:</strong> We import <code>BaseModel</code> from
                Pydantic to create our schema classes. Pydantic provides data
                validation and parsing.
              </p>
              <p className="mb-2">
                <strong>Class Definition:</strong> The <code>UserBase</code>{" "}
                class defines the common fields <code>email</code> and{" "}
                <code>full_name</code> that will be shared across other schemas.
              </p>
              <p className="mb-2">
                <strong>Creating Data Schema:</strong> The{" "}
                <code>UserCreate</code> class extends <code>UserBase</code> and
                adds a <code>password</code> field, which is required when
                creating a new user.
              </p>
              <p className="mb-2">
                <strong>Retrieving Data Schema:</strong> The <code>User</code>{" "}
                class extends <code>UserBase</code> and adds an <code>id</code>{" "}
                field, which is returned by the API. The <code>Config</code>{" "}
                subclass with <code>orm_mode = True</code> enables compatibility
                with ORM models, allowing Pydantic to read data from SQLAlchemy
                models.
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Additional Tips</h2>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  Use descriptive names for your schema classes and fields to
                  make your code more readable and maintainable.
                </li>
                <li className="mb-2">
                  You can create additional schemas for update operations or
                  other specific use cases by extending the base schema.
                </li>
                <li className="mb-2">
                  Schemas can also include data validation logic using
                  Pydantic's built-in features, such as field constraints and
                  custom validators.
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeSection === "crud" && (
          <div>
            <h1 className="text-2xl font-bold">Creating CRUD Operations</h1>
            <p className="mb-4">
              CRUD operations (Create, Read, Update, Delete) are essential for
              interacting with your database. Follow the steps below to create
              CRUD operations for your FastAPI application:
            </p>
            <ol className="list-decimal list-inside mb-4">
              <li className="mb-2">
                Create a new file called <code>crud.py</code> in your project
                directory.
              </li>
              <li className="mb-2">
                Import the necessary modules from SQLAlchemy and your models and
                schemas. SQLAlchemy is used to interact with the database, and
                models define the structure of your database tables, while
                schemas define the structure of your data.
              </li>
              <li className="mb-2">
                Define a function to retrieve a user by their ID. This function
                queries the database and returns the user record if found.
              </li>
              <li className="mb-2">
                Define a function to retrieve a user by their email. This
                function queries the database and returns the user record if
                found.
              </li>
              <li className="mb-2">
                Define a function to create a new user. This function takes the
                user schema as input, hashes the password, and adds the new user
                record to the database.
              </li>
            </ol>
            <pre className="bg-gray-300 p-4 rounded relative">
              <button
                onClick={() =>
                  handleCopy(`from sqlalchemy.orm import Session
from . import models, schemas

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(email=user.email, hashed_password=fake_hashed_password, full_name=user.full_name)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user`)
                }
                className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
              >
                Copy
              </button>
              {`from sqlalchemy.orm import Session
from . import models, schemas

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(email=user.email, hashed_password=fake_hashed_password, full_name=user.full_name)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user`}
            </pre>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Explanation</h2>
              <p className="mb-2">
                <strong>Imports:</strong> We import <code>Session</code> from
                SQLAlchemy to interact with the database, and we import{" "}
                <code>models</code> and <code>schemas</code> from our project.
                Models define the database tables, and schemas define the data
                structure.
              </p>
              <p className="mb-2">
                <strong>Get User by ID:</strong> The <code>get_user</code>{" "}
                function takes a database session and a user ID as arguments. It
                queries the <code>User</code> model to find the user with the
                specified ID and returns the result.
              </p>
              <p className="mb-2">
                <strong>Get User by Email:</strong> The{" "}
                <code>get_user_by_email</code> function takes a database session
                and an email as arguments. It queries the <code>User</code>{" "}
                model to find the user with the specified email and returns the
                result.
              </p>
              <p className="mb-2">
                <strong>Create User:</strong> The <code>create_user</code>{" "}
                function takes a database session and a <code>UserCreate</code>{" "}
                schema as arguments. It hashes the user's password, creates a
                new <code>User</code> object with the provided data, adds the
                user to the database, commits the transaction, and refreshes the
                session to get the updated user record.
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Additional Tips</h2>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  Ensure that your <code>models</code> and <code>schemas</code>{" "}
                  are correctly defined and imported. The <code>models</code>{" "}
                  should match the structure of your database tables, and the{" "}
                  <code>schemas</code> should match the structure of your data.
                </li>
                <li className="mb-2">
                  Use descriptive names for your functions and variables to make
                  your code more readable and maintainable.
                </li>
                <li className="mb-2">
                  You can add more CRUD operations as needed, such as update and
                  delete functions, following the same pattern.
                </li>
                <li className="mb-2">
                  Consider using a proper password hashing algorithm (e.g.,
                  bcrypt) for securely storing passwords instead of the
                  example's fake hashing.
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeSection === "api" && (
          <div>
            <h1 className="text-2xl font-bold">Creating API Endpoints</h1>
            <p className="mb-4">
              API endpoints allow your application to communicate with the
              database and perform CRUD operations. Follow the steps below to
              create API endpoints in your FastAPI application:
            </p>
            <ol className="list-decimal list-inside mb-4">
              <li className="mb-2">
                Import the necessary modules from FastAPI, SQLAlchemy, and your
                project files. FastAPI provides the framework for building APIs,
                SQLAlchemy is used to interact with the database, and your
                project files contain the models, schemas, and CRUD operations.
              </li>
              <li className="mb-2">
                Initialize the database. Ensure your models are created in the
                database by binding them to the engine.
              </li>
              <li className="mb-2">
                Create a dependency function to manage the database session.
                This function opens a new session for each request and closes it
                after the request is completed.
              </li>
              <li className="mb-2">
                Define an endpoint to create a new user. This endpoint uses the
                POST method and accepts a UserCreate schema as input. It checks
                if the email is already registered and creates a new user if the
                email is unique.
              </li>
              <li className="mb-2">
                Define an endpoint to read a user by their ID. This endpoint
                uses the GET method and returns the user details if the user is
                found.
              </li>
            </ol>
            <pre className="bg-gray-300 p-4 rounded relative">
              <button
                onClick={() =>
                  handleCopy(`from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user`)
                }
                className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
              >
                Copy
              </button>
              {`from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try {
        yield db
    } finally {
        db.close()
    }
}

@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user`}
            </pre>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Explanation</h2>
              <p className="mb-2">
                <strong>Imports:</strong> We import <code>Depends</code>,{" "}
                <code>FastAPI</code>, and <code>HTTPException</code> from
                FastAPI. We also import <code>Session</code> from SQLAlchemy,
                and our project's <code>crud</code>, <code>models</code>, and{" "}
                <code>schemas</code> modules. Finally, we import{" "}
                <code>SessionLocal</code> and <code>engine</code> from our{" "}
                <code>database</code> module.
              </p>
              <p className="mb-2">
                <strong>Database Initialization:</strong> The line{" "}
                <code>models.Base.metadata.create_all(bind=engine)</code>{" "}
                creates the database tables based on the models defined in our
                project. The <code>bind=engine</code> argument binds the
                metadata to the database engine.
              </p>
              <p className="mb-2">
                <strong>Dependency Function:</strong> The <code>get_db</code>{" "}
                function manages the database session for each request. It uses
                a <code>try</code>-<code>finally</code> block to ensure the
                session is closed after the request is completed.
              </p>
              <p className="mb-2">
                <strong>Creating a User:</strong> The{" "}
                <code>@app.post("/users/")</code> decorator defines a POST
                endpoint at <code>/users/</code>. The <code>create_user</code>{" "}
                function checks if a user with the provided email already exists
                using the <code>get_user_by_email</code> function. If the email
                is already registered, it raises an <code>HTTPException</code>{" "}
                with status code 400. Otherwise, it creates a new user using the{" "}
                <code>create_user</code> function from the <code>crud</code>{" "}
                module.
              </p>
              <p className="mb-2">
                <strong>Reading a User:</strong> The{" "}
                <code>@app.get("/users/{user_id}")</code> decorator defines a
                GET endpoint at <code>/users/{user_id}</code>. The{" "}
                <code>read_user</code> function retrieves the user with the
                specified ID using the <code>get_user</code> function from the{" "}
                <code>crud</code> module. If the user is not found, it raises an{" "}
                <code>HTTPException</code> with status code 404.
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Additional Tips</h2>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  Ensure that your <code>models</code>, <code>schemas</code>,
                  and <code>crud</code> functions are correctly defined and
                  imported. The <code>models</code> should match the structure
                  of your database tables, the <code>schemas</code> should match
                  the structure of your data, and the <code>crud</code>{" "}
                  functions should perform the necessary database operations.
                </li>
                <li className="mb-2">
                  Use descriptive names for your endpoints and functions to make
                  your API more readable and maintainable.
                </li>
                <li className="mb-2">
                  You can add more endpoints as needed, following the same
                  pattern. For example, you can add endpoints for updating and
                  deleting users.
                </li>
                <li className="mb-2">
                  Consider using proper authentication and authorization
                  mechanisms to secure your API endpoints.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setup;
