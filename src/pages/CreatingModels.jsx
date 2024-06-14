import React from "react";

const CreatingModels = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Creating Models</h1>
      <p className="mb-4">Define your database models using SQLAlchemy:</p>
      <pre className="bg-gray-100 p-4 rounded">
        {`from sqlalchemy import Column, Integer, String
from database import Base

class Item(Base):
    __tablename__ = "items"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, index=True)`}
      </pre>
    </div>
  );
};

export default CreatingModels;
