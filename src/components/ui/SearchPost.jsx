import { useState } from "react";

export function SearchPost({ label, placeholder, buttonText, onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-2 font-medium text-gray-700">{label}</label>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue} // <-- penting
          onChange={(e) => setSearchValue(e.target.value)} // <-- penting
          className="flex-1 border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          {buttonText}
        </button>
      </div>
    </form>
  );
}
