import React from "react";

export default function ItemModal({ item, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-80 text-center">
        <img src={item.image} alt="" className="rounded-lg mb-4" />
        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        <p className="text-sm">{item.description}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}