import React, { useState } from "react";

const Setup = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "main", label: "main.py Setup" },
    { id: "database", label: "database.py Setup" },
    { id: "summary", label: "summry" },
    { id: "postgresql", label: "Connecting to PostgreSQL" },
    { id: "models", label: "Creating Models" },
    { id: "schemas", label: "Creating Schemas" },
    { id: "crud", label: "Creating CRUD Operations" },
    { id: "api", label: "Creating API Endpoints" },
  ];

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
              Follow these steps to set up your FastAPI project:
            </p>
            <div className="flex flex-col gap-5">
              <pre className="bg-gray-300 p-4 rounded">{`mkdir fastapi-tutorial`}</pre>
              <pre className="bg-gray-300 p-4 rounded">{`cd fastapi-tutorial`}</pre>
              <pre className="bg-gray-300 p-4 rounded">{`pip install fastapi uvicorn sqlalchemy psycopg2-binary`}</pre>
              <pre className="bg-gray-300 p-4 rounded">{`touch main.py`}</pre>
              <pre className="bg-gray-300 p-4 rounded">{`touch database.py`}</pre>
              <pre className="bg-gray-300 p-4 rounded">{`uvicorn main:app --reload`}</pre>
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
            <pre className="bg-gray-300 p-4 rounded">
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
            <pre className="bg-gray-300 p-4 rounded">
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
            <pre className="bg-gray-300 p-4 rounded">
              {`SQLALCHEMY_DATABASE_URL = "postgresql://<username>:<password>@<host>:<port>/<database_name>"`}
            </pre>
            <p className="mb-4">
              For example, if your username is <code>postgres</code>, your
              password is <code>yourpassword</code>, your host is{" "}
              <code>localhost</code>, your port is <code>5432</code>, and your
              database name is <code>mydatabase</code>, the connection string
              would be:
            </p>
            <pre className="bg-gray-300 p-4 rounded">
              {`SQLALCHEMY_DATABASE_URL = "postgresql://postgres:yourpassword@localhost:5432/mydatabase"`}
            </pre>
            <p className="mb-4">
              Don't have a connection string? Click the button below for
              instructions on setting up PostgreSQL and obtaining your
              connection string.
            </p>
            <button
              onClick={() => setActiveSection("database")}
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
                onClick={() => (window.location.href = "/creating-routes")}
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
                <pre className="bg-gray-300 p-2 rounded">
                  brew install postgresql
                </pre>
              </li>
              <li>
                Start the PostgreSQL service:
                <pre className="bg-gray-300 p-2 rounded">
                  brew services start postgresql
                </pre>
              </li>
              <li>
                Create a default PostgreSQL user:
                <pre className="bg-gray-300 p-2 rounded">
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
                <pre className="bg-gray-300 p-2 rounded">psql -U postgres</pre>
              </li>
              <li>
                Create a new database:
                <pre className="bg-gray-300 p-2 rounded">
                  CREATE DATABASE mydatabase;
                </pre>
              </li>
              <li>
                Exit the PostgreSQL prompt:
                <pre className="bg-gray-300 p-2 rounded">\q</pre>
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
            <pre className="bg-gray-300 p-4 rounded">
              {`SQLALCHEMY_DATABASE_URL = "postgresql://<username>:<password>@<host>:<port>/<database_name>"`}
            </pre>
            <p className="mb-4">
              For example, if your username is <code>postgres</code>, your
              password is <code>yourpassword</code>, your host is{" "}
              <code>localhost</code>, your port is <code>5432</code>, and your
              database name is <code>mydatabase</code>, the connection string
              would be:
            </p>
            <pre className="bg-gray-300 p-4 rounded">
              {`SQLALCHEMY_DATABASE_URL = "postgresql://postgres:yourpassword@localhost:5432/mydatabase"`}
            </pre>
          </div>
        )}

        {activeSection === "models" && (
          <div>
            <h1 className="text-2xl font-bold">Creating Models</h1>
            <p className="mb-4">
              Create a new file called <code>models.py</code> and define your
              database models:
            </p>
            <pre className="bg-gray-300 p-4 rounded">
              {`from sqlalchemy import Column, Integer, String
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    full_name = Column(String)`}
            </pre>
          </div>
        )}
        {activeSection === "schemas" && (
          <div>
            <h1 className="text-2xl font-bold">Creating Schemas</h1>
            <p className="mb-4">
              Create a new file called <code>schemas.py</code> and define your
              data schemas:
            </p>
            <pre className="bg-gray-300 p-4 rounded">
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
          </div>
        )}
        {activeSection === "crud" && (
          <div>
            <h1 className="text-2xl font-bold">Creating CRUD Operations</h1>
            <p className="mb-4">
              Create a new file called <code>crud.py</code> and define your CRUD
              operations:
            </p>
            <pre className="bg-gray-300 p-4 rounded">
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
          </div>
        )}
        {activeSection === "api" && (
          <div>
            <h1 className="text-2xl font-bold">Creating API Endpoints</h1>
            <p className="mb-4">
              Modify your <code>main.py</code> to include API endpoints:
            </p>
            <pre className="bg-gray-300 p-4 rounded">
              {`from fastapi import Depends, FastAPI, HTTPException
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
    return db_user`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setup;
