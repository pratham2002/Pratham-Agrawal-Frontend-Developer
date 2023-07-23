import React from "react";
import "./App.css";
import Banner from "./Components/Banner";
import LoginModal from "./Components/LoginModal";
import SearchForm from "./Components/SearchForm";
function App() {
  return (
    <>
      <LoginModal />
      <div>
        <section id="banner">
          <Banner />
        </section>
        <section id="search-area">
          <SearchForm />
        </section>
      </div>
    </>
  );
}

export default App;
