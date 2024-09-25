import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  let params = useParams();
  let [movie, setMovie] = useState({});
  const getMovie = () => {
    return fetch(
      `https://api.themoviedb.org/3/${params.media_type}/${params.id}?api_key=11d04016ca44ea31c5164e8ad6bf18e1`
    )
      .then((res) => res.json())
      .then((json) => setMovie(json));
  };

  useEffect(() => {
    getMovie();
  }, {});

  return (
    <div className="bg-dark">
      <div className="container">
        <div className="d-lg-flex align-items-center">
          <div className="movie-img my-lg-5">
            <img
              className="border border-5 rounded"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="card-img"
            />
          </div>
          <div className="mx-lg-5">
            <h1>
              {movie.original_title}
              {movie.original_name}
            </h1>
            <p className="fs-4 fw-bold text-white-50">
              Title:
              <span className="fs-5 fw-normal mx-2 text-white">
                {movie.original_title}
                {movie.original_name}
              </span>
            </p>

            <p className="fs-4 fw-bold text-white-50">
              Description:
              <span className="fs-5 fw-normal mx-2 text-white">
                {movie.overview}
              </span>
            </p>

            <p className="fs-4 fw-bold text-white-50">
              Type:
              <span className="fs-5 fw-normal mx-2 text-white">
                {params.media_type}
              </span>
            </p>

            <p className="fs-4 fw-bold text-white-50">
              Language:
              <span className="fs-5 fw-normal mx-2 text-white">
                {movie.original_language}
              </span>
            </p>

            <p className="fs-4 fw-bold text-white-50">
              Popularity:
              <span className="fs-5 fw-normal mx-2 text-white">
                {movie.popularity}
              </span>
            </p>

            <p className="fs-4 fw-bold text-white-50">
              Adult:
              <span className="fs-5 fw-normal mx-2 text-white">
                {movie.adult ? "True" : "False"}
              </span>
            </p>

            <p className="fs-4 fw-bold text-white-50">
              Release Date:
              <span className="fs-5 fw-normal mx-2 text-white">
                {movie.release_date}
                {movie.first_air_date}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Movie;
