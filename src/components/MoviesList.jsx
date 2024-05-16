import { Row } from "react-bootstrap"
import CardMovie from "./CardMovie"

import PaginationComponent from "./PaginationComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMoviesRedux } from "../redux/actions/movieActions";


function MoviesList() {

  const [movies, setMovies] = useState([]);
  const dispatchMovie = useDispatch();

  useEffect(() => {
    dispatchMovie(getAllMoviesRedux())
  }, [dispatchMovie]);
  const dataAllMovies = useSelector(state => state.movies)
  
  useEffect(() => {
    setMovies(dataAllMovies)
  }, [dataAllMovies]);
  return (
    <Row className="mt-3" >
      {movies?.map((movie) => {
        return (
          <CardMovie key={movie.id} movie={movie}/>
        )
      })}
      {movies.length >= 1 ? (<PaginationComponent />) : null}
    </Row>
  )
}

export default MoviesList

