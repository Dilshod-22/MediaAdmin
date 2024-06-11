import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./movie.css";

import axios from "axios";
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const history = useNavigate();

  const apiHandler = async () => {
    let { data } = await axios.get("/get");
    setMovies(data.data)
  };

  console.log(movies)

  useEffect(() => {
    apiHandler()
  }, []);

  const handleClick = (movieId) => {
    console.log(movieId)
    history(`/detail/${movieId}`);
  };

  return (
    <div className="movies">
      <Container>
        <h2 className="mt-3">Фильмы</h2>
        <Row className="mt-4">
          {movies.map((movie) => (
            <Col key={movie.id} lg={3} md={6} sm={12} className="mb-4">
              <div
                className="movie-info border bg-white p-4 rounded"
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(movie._id)}
              >
                <img src={movie.movie_image} width="200" height='300' alt={movie.title} />
                <h6>{movie.name?.length > 14 ? movie.name.slice(0, 14) : movie.name}</h6>
                <p>Time {movie.time} min</p>
                <p>Film year {movie.year}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MoviesPage;
