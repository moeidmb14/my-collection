import React, { useState } from "react";
import ItemModal from "./ItemModal";

export default function Gallery({ items, selectedCategory }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {items
        .filter(item => selectedCategory === "All" || item.category === selectedCategory)
        .map((item, index) => (
          <div key={index} className="cursor-pointer" onClick={() => setSelectedItem(item)}>
            <img src={item.image} alt="" className="rounded-xl shadow-lg" />
            <p className="mt-2 text-center">{item.title}</p>
          </div>
        ))}
      {selectedItem && (
        <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}