import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams(); // Destructure id from useParams

  const [movieDetailsData, setMovieDetailsData] = useState([]);

  // get all data by fetch
  const getMovieDetails = async (movId) => {
    const url = `https://api.themoviedb.org/3/movie/${movId}?language=ar-eg`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGE5Yzk1ZjU2YTg2MzE1ZjJhOTM1MjY1M2IyMzA4ZCIsInN1YiI6IjY2MGNlN2RjMzNhMzc2MDE3ZDgxZTk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1RwSljZdq72C8Mz7bG8x5_dpIlEqqwpv-YVlRXTmts",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovieDetailsData(json);
      })
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    getMovieDetails(id); // Pass id to getMovieDetails
  }, [id]); // Add id to the dependency array

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-details d-flex align-items-center">
            <img className="img-movie w-30" src={`https://image.tmdb.org/t/p/w500/${movieDetailsData.poster_path}`} alt="MoviePoster" />
            <div className="justify-content-center text-center mx-auto">
              <p className="card-text-details border-bottom">اسم الفيلم: {movieDetailsData.original_title}</p>
              <p className="card-text-details border-bottom">تاريخ الفيلم: {movieDetailsData.release_date} </p>
              <p className="card-text-details border-bottom">عدد المقيمين: {movieDetailsData.vote_count} </p>
              <p className="card-text-details border-bottom">التقييم: {Number.parseFloat(movieDetailsData.vote_average).toFixed(1)}</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom">القصة: {movieDetailsData.overview}</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">بلد المنشأ: {movieDetailsData.origin_country}</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center"
        >
          <Link to={"/"}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              عودة للرئيسية
            </button>
          </Link>
          <a href={movieDetailsData.homepage} target="_blank">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              مشاهدة الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default MovieDetails;
