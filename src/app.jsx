import React, { useState, useEffect } from "react";
import LightningName from "./components/LightningName";
import Gallery from "./components/Gallery";
import AdminPanel from "./components/AdminPanel";

export default function App() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    setItems(storedItems);
    setCategories(storedCategories);
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white p-4"
      style={{ backgroundImage: 'url("/src/assets/bg-space.jpg")' }}
    >
      <div className="max-w-4xl mx-auto">
        <LightningName name="Lil M0n$" />
        <div className="my-4 flex gap-2 flex-wrap">
          <button
            className={px-3 py-1 rounded ${selectedCategory === "All" ? "bg-purple-600" : "bg-gray-800"}}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={px-3 py-1 rounded ${selectedCategory === cat ? "bg-purple-600" : "bg-gray-800"}}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <Gallery items={items} selectedCategory={selectedCategory} />

        <AdminPanel
          items={items}
          setItems={setItems}
          categories={categories}
          setCategories={setCategories}
        />
      </div>
    </div>
  );
}