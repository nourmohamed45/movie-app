import { Col, Container, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import logo from "../images/logo.png";
import { useDispatch } from "react-redux";
import { getAllMoviesRedux, getSearchedMovieRedux } from "../redux/actions/movieActions";


function NavBar() {
  const [searchedMovie, setSearchedMovie] = useState("");

  const dispatchMovie = useDispatch();


    // Make search request
    const search = async (word) => {
      if (word.length === 0) {
        dispatchMovie(getAllMoviesRedux())
      } else {
        dispatchMovie(getSearchedMovieRedux(word))
      }
    };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row>
          <Col xs="2" lg="1" onClick={()=> {
            dispatchMovie(getAllMoviesRedux())
          }}>
            <a href="/">
              <img className="logo" src={logo} alt="Logo" />
            </a>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <FaSearch className="fa-search" />
              <input
                type="text"
                className="form-control"
                placeholder="ابحث"
                value={searchedMovie}
                onChange={(e) => {
                  setSearchedMovie(e.target.value);
                  if (searchedMovie.length === 0 || searchedMovie.length > 0) {
                    search(searchedMovie);
                  }
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;

