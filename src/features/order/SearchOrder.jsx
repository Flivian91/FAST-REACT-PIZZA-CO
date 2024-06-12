import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit} className="">
      <input
        type="text"
        placeholder="Search order"
        value={query}
        className="text-sm placeholder:text-stone-500 w-28 rounded-full bg-yellow-100 px-4 py-2 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-opacity-50 "
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
