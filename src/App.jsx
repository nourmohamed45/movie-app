import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllMoviesRedux } from "./redux/actions/movieActions";

function App() {
  const [, setMovies] = useState([]);

  const dispatchMovie = useDispatch();

  useEffect(() => {
    dispatchMovie(getAllMoviesRedux());
  }, [dispatchMovie]);
  const dataAllMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataAllMovies)
  }, [dataAllMovies]);


  return (
    <>
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />

            <Route path={"/movie/:id"} element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
