import { useState, useEffect } from "react";
import Card from "./Card";
function CardContainer(props) {
  let search = props.search;
  let [movies, setMovies] = useState([]);
  const getMovies = () => {
    return fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=11d04016ca44ea31c5164e8ad6bf18e1"
    )
      .then((res) => res.json())
      .then((json) => setMovies(json));
  };

  let result = movies?.results;

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="bg-dark text-white py-5 px-5">
      <div className="container-fluid">
        <h2>Popular watching</h2>
        <div className="container py-3">
          <div className="row">
            {props.filterCategory === "all"
              ? result
                  ?.filter((movie) => {
                    return props.search === ""
                      ? movie
                      : movie?.name?.toLowerCase().includes(search) ||
                          movie?.title?.toLowerCase().includes(search);
                  })
                  .map((movie, index) => (
                    <Card key={index} dataFromParent={movie} />
                  ))
              : result
                  ?.filter((category) =>
                    category.media_type === props.filterCategory
                      ? category
                      : null
                  )
                  .map((movie, index) => (
                    <Card key={index} dataFromParent={movie} />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardContainer;
