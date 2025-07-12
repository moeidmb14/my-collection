import React, { useState } from "react";

export default function AdminPanel({ items, setItems, categories, setCategories }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleAddItem = () => {
    setItems([...items, { title, description, image, category }]);
    setTitle(""); setDescription(""); setImage(""); setCategory("");
  };

  const handleAddCategory = () => {
    if (!categories.includes(category) && category.trim() !== "") {
      setCategories([...categories, category]);
      setCategory("");
    }
  };

  return (
    <div className="mt-8 p-4 bg-gray-800 rounded-xl">
      <h3 className="text-lg font-bold mb-2">Admin Panel</h3>
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 rounded bg-gray-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="w-full p-2 rounded bg-gray-700"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-2 rounded bg-gray-700"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          className="w-full p-2 rounded bg-gray-700"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <div className="flex gap-2">
          <button onClick={handleAddItem} className="px-3 py-1 bg-purple-600 rounded hover:bg-purple-700">
            Add Item
          </button>
          <button onClick={handleAddCategory} className="px-3 py-1 bg-green-600 rounded hover:bg-green-700">
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
}