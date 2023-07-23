import React, { useContext } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import LoginModal from "./Components/LoginModal";
import SearchForm from "./Components/SearchForm";
import { UserContext } from "./Context/UserContext";
function App() {
  const { userDetails } = useContext(UserContext);

  return (
    <>
      {userDetails?.jwtToken ? (
        <div>
          <section id="banner">
            <Banner />
          </section>
          <section id="search-area">
            <SearchForm />
          </section>
        </div>
      ) : (
        <LoginModal />
      )}
    </>
  );
}

export default App;
