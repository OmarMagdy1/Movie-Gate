import { Link } from "react-router-dom";
function Card(props) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
      <div className="card border border-2">
        <img
          src={`https://image.tmdb.org/t/p/w500${props.dataFromParent.backdrop_path}`}
          className="card-img-top"
          alt="card-img"
        />
        <div className="card-body bg-dark text-white">
          <h4 className="card-title">
            {props.dataFromParent.original_title}
            {props.dataFromParent.name}
          </h4>
          <p className="card-text">{props.dataFromParent.overview}</p>
          <Link
            to={`/movie/${
              props.dataFromParent.original_title ||
              props.dataFromParent.original_name
            }/${props.dataFromParent.media_type}/${props.dataFromParent.id}`}
            className="btn btn-primary"
          >
            Watch Now
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Card;
