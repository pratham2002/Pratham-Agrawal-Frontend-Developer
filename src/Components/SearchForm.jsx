import React, { useEffect, useState } from "react";
import useDataFetchHook from "../customHook/DataFetchHook";
import useTablePagination from "../customHook/TablePaginationHook";
import CapsuleCard from "./CapsuleCard";
const base_url = "http://localhost:3001/capsules";
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
  const [page, handleChangePage] = useTablePagination();
  const [url, setUrl] = useState(null);
  const [apiData, fetchAgain] = useDataFetchHook(url);
  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    if (!searchText || !filterType) {
      return;
    }
    event.preventDefault();
    const params = new URLSearchParams();
    params.set("offset", 0 * 10);
    params.set(filterType, searchText);
    const newUrl = base_url + "?" + params.toString();
    handleChangePage(-page);
    setUrl(newUrl);
  };

  const handleClear = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    params.set("offset", 0 * 10);
    const newUrl = base_url + "?" + params.toString();
    handleChangePage(-page);
    setFilterType("default");
    setSearchText("");
    setUrl(newUrl);
  };

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("offset", page * 10);
    if (filterType !== "default") {
      params.set(filterType, searchText);
    }
    const newUrl = base_url + "?" + params.toString();
    setUrl(newUrl);
    return () => {};
  }, [page]);

  return (
    <>
      <section id="search-form">
        <form
          className="search-form"
          onReset={handleClear}
          onSubmit={handleSubmit}
        >
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
          <div className="pagination-button">
            <button type="submit">Search</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </section>
      <div className="pagination-button">
        <button
          disabled={page < 1}
          style={{ cursor: page < 1 && "not-allowed" }}
          onClick={() => handleChangePage(-1)}
        >
          Prev
        </button>{" "}
        <button
          disabled={
            apiData?.res?.data?.length == 0 || apiData?.res?.data?.length < 10
          }
          style={{
            cursor:
              apiData?.res?.data?.length == 0 ||
              (apiData?.res?.data?.length < 10 && "not-allowed"),
          }}
          onClick={() => handleChangePage(1)}
        >
          Next
        </button>
      </div>
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
      <section id="search-results">
        <div className="capsule-list">
          {apiData?.res?.data?.map((item, index) => (
            <CapsuleCard key={index} capsule={item} />
          ))}
        </div>
        {apiData?.res?.data?.length === 0 && (
          <div
            className="capsule-list"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>No Data Available for the given query</div>
          </div>
        )}
      </section>
    </>
  );
}
