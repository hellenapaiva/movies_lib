import { Link } from "react-router-dom";

import { BsFillStarFill } from "react-icons/bs";

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imageURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p className="average">
        <BsFillStarFill /> {movie.vote_average}
      </p>
      {showLink && (
        <Link to={`/movie/${movie.id}`} className="link-details">
          Detalhes
        </Link>
      )}
    </div>
  );
};

export default MovieCard;
