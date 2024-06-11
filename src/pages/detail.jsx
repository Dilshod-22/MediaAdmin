import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import YouTube from "react-youtube";
import axios from "axios";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/get_movie/${id}`);
        setMovie(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [id]);
  console.log(movie);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  

  const backHandler = () => {
    history("/home");
  };

  

  const deleteHandler = async(id) => {
    const { data } = await axios.post(`/delete/${id}`)
    console.log(data)
    history("/home");
  }

  if (error) {
    return <div className="error-message">Ошибка: {error}</div>;
  }

  if (!movie) {
    return <div>Загрузка...</div>;
  }

  return (
    <Container>
      <h2 className="mt-3">{movie.title}</h2>
      <Row style={{ marginBottom: "30px" }}>
        <Col md={6}>
          <div className="d-flex justify-content-center">
            <Card className="movie-card w-50 h-50">
              <Card.Img
                variant="top"
                src={movie.movie_image}
                alt={movie.title}
              />
            </Card>
          </div>
        </Col>
        <Col md={6}>
          <Card className="movie-details">
            <Card.Body>
              <Card.Text>
                <strong>Описание:</strong> {movie.description}
              </Card.Text>
              <Card.Text>
                <strong>Жанр:</strong> Action
              </Card.Text>
              <Card.Text>
                <strong>Популярность:</strong> {movie.popularity}
              </Card.Text>
              <Card.Text>
                <strong>Год выпуска:</strong> {movie.year}
              </Card.Text>
              <Card.Text>
                <strong>Длительность:</strong> {movie.time} min
              </Card.Text>
              <div className="mb-2">
                <Button className="mt-3 mx-3">
                  Смотреть
                </Button>
                <Button className="mt-3 btn-danger mx-3" onClick={() => deleteHandler(id)}>Удалить</Button>
                <Button className="mt-3 btn-warning mx-3" onClick={backHandler}>
                  Назад
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: "30px" }}>
        <Col md={6}>
          <Card className="movie-card">
            <div>
              <YouTube videoId={movie.movie_video} opts={opts} />
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="movie-details">
            <Card.Img
              variant="top"
              src={
                "https://static5.tgstat.ru/channels/_0/32/32e2603376ff5cb37399f47117e2d154.jpg"
              }
              alt={movie.title}
              style={{ height: "450px" }}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetailsPage;
