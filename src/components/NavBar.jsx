// import { useState } from "react";
import { Link } from "react-router-dom";
function NavBar(props) {
  function filterCategory(event) {
    props.filterValueSelected(event.target.id);
  }

  function searchFilter(event) {
    props.searchFilter(event.target.value);
  }

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top text-light"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div>
          <h2>MovieGate</h2>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-lg-0">
            <li className="nav-item">
              <Link to={"/Movie-Gate"} className="nav-link mx-2 fs-5">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle mx-2 fs-5"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="categories"
              >
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to={"/Movie-Gate"}
                    className="dropdown-item"
                    id="all"
                    onClick={filterCategory}
                  >
                    All
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/Movie-Gate"}
                    className="dropdown-item"
                    id="movie"
                    onClick={filterCategory}
                  >
                    Movies
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/Movie-Gate"}
                    className="dropdown-item"
                    id="tv"
                    onClick={filterCategory}
                  >
                    TV
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to={"/aboutme"} className="nav-link mx-2 fs-5">
                About-Me
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <input
            type="search"
            placeholder="Search"
            className="p-1 border bg-white text-black rounded mw-100"
            onChange={searchFilter}
          />
          <i className="fa-solid fa-user ms-3 border border-2 border-white p-2 rounded-circle" />
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
