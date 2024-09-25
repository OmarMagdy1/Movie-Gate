import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Movie from "./components/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [filterCategory, setFilterCategory] = useState("all");
  let [search, setSearch] = useState("");

  function onFilterCategories(filteredValue) {
    setFilterCategory(filteredValue);
  }
  function onSearch(searchValue) {
    setSearch(searchValue);
  }

  return (
    <BrowserRouter>
      <div>
        <NavBar
          filterValueSelected={onFilterCategories}
          searchFilter={onSearch}
        />
        <Routes>
          <Route
            path="/Movie-Gate"
            element={<Home filterCategory={filterCategory} search={search} />}
          />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:title/:media_type/:id" element={<Movie />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
