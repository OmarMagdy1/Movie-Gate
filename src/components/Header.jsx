import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="hero text-light text-center d-flex flex-column justify-content-center align-items-center">
      <h1 className="container fw-bold">
        Welcome to the world of cinema and TV series!
      </h1>
      <p className="container fs-5">
        Filmoon is a universal service for movie and TV series lovers. Here you
        can easily find films, TV series and actors, and also create your own
        lists, which you can share with friends via a link. In the lists you can
        track the current series and season, change the status of films and
        share your impressions of the works you watched.
      </p>
      <Link to={"/login"} className="btn btn-outline-light btn-lg">
        Start exploring
      </Link>
    </header>
  );
}
export default Header;
