'use client'
import React, { useState } from 'react';
import Listitem from './Listitem';

const Additem = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleTodoItem = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      setItems([...items, { id: Date.now(), text: newItem, completed: false }]);
      setNewItem('');
    }
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleComplete = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-300">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-[90%] max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Todo List</h1>

        <form className="flex flex-col gap-4" onSubmit={handleTodoItem}>
          <input
            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            type="text"
            placeholder="Enter your task..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all">
            Add Item
          </button>
        </form>

        <div className="mt-6">
        <Listitem item={items} handleDelete={handleDelete} handleComplete={handleComplete} />
        </div>
      </div>
    </div>
  );
};

export default Additem;