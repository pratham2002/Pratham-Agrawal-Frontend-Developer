import React, { useState } from "react";

export default function SearchForm() {
  const [filterType, setFilterType] = useState("default");
  const [searchText, setSearchText] = useState("");

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call your API here using filterType and searchText
    // Reset the form if needed
    setSearchText("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <select value={filterType} onChange={handleFilterChange}>
        <option value="default">Select Filter</option>
        <option value="filter1">Filter 1</option>
        <option value="filter2">Filter 2</option>
        {/* Add more filter options if needed */}
      </select>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder="enter text"
      />
      <button type="submit">Search</button>
    </form>
  );
}
