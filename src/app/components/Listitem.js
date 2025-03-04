'use client'
import React from "react";
import PropTypes from "prop-types";

const Listitem = ({ item, handleDelete, handleEdit,handleComplete }) => {
  console.log("Items received in Listitem:", item);

  if (!Array.isArray(item)) {
    return <div>No items to display</div>;
  }

  return (
    <ul className="w-full max-w-md mx-auto space-y-3 mt-6">
      {item.map((todo) => {
        if (!todo || typeof todo !== "object" || !todo.id || !todo.text || typeof todo.completed !== "boolean") {
          console.error("Invalid todo item:", todo);
          return null; 
        }

        return (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gradient-to-r from-gray-100 to-gray-200 shadow-md rounded-xl px-2 py-4 transition-transform transform hover:scale-105"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleComplete(todo.id)}
              className="mr-2"
            />
            <span className={`text-gray-900 text-lg font-semibold ${todo.completed ? 'line-through' : ''}`}>
              {todo.text}
            </span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Delete
            </button>
                <button
              onClick={() => handleEdit()}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Edit
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Listitem.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleComplete: PropTypes.func.isRequired,
};

export default Listitem;
