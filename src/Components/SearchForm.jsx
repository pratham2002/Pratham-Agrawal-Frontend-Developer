import React, { useEffect, useState } from "react";
import useDataFetchHook from "../customHook/DataFetchHook";

const filterOptions = [
  { label: "Capsule Serial", value: "capsule_serial" },
  { label: "Capsule id", value: "capsule_id" },
  { label: "Status", value: "status" },
  { label: "Original Launch", value: "original_launch" },
  { label: "Mission", value: "mission" },
  { label: "Landings", value: "landings" },
  { label: "Type", value: "type" },
  { label: "Reuse Count", value: "reuse_count" },
];

export default function SearchForm() {
  const [filterType, setFilterType] = useState("default");
  const [searchText, setSearchText] = useState("");
  const [url, setUrl] = useState(null);
  const [apiData, fetchAgain] = useDataFetchHook(url);
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

  useEffect(() => {
    const url = "http://localhost:3001/capsules";
    setUrl(url);

    return () => {};
  }, []);

  return (
    <>
      <section id="search-form">
        <form className="search-form" onSubmit={handleSubmit}>
          <select value={filterType} onChange={handleFilterChange}>
            <option value="default" disabled>
              Select Filter
            </option>
            {filterOptions?.map((e) => (
              <option value={e.value}>{e.label}</option>
            ))}
          </select>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchTextChange}
            placeholder="enter text"
          />
          <button type="submit">Search</button>
        </form>
      </section>
      {apiData?.loading && <span class="loader"></span>}
      {apiData?.error && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBlock: 20,
          }}
        >
          {apiData?.errorMessage ?? "Something went wrong"}
          <button onClick={fetchAgain}>Retry</button>
        </div>
      )}
      <section id="search-results"></section>
    </>
  );
}
