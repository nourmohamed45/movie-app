import { Col } from "react-bootstrap";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function CardMovie({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${movie.id}`}>
        <div className="card">
          <img src={imageUrl} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم: {movie.original_title}</p>
              <p>تاريخ الإصدار:{movie.release_date}</p>
              <p>التقييم: {Number.parseFloat(movie.vote_average).toFixed(1)}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default CardMovie;

CardMovie.propTypes = {
  movie: PropTypes.object,
};
