import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./add.css";
const AddMovie = () => {
  const [name, setName] = useState("");
  const [movie_video, setMovie] = useState("");
  const [movie_image, setMovieImage] = useState("");
  const [time, setTime] = useState("");
  const [year, setYear] = useState("");
  const [popularity, setPopularity] = useState("");
  const [description, setDesc] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newMovie = { name: name, movie_image: movie_image, movie_video: movie_video, year: year, time: time, popularity: popularity, description: description };
    let { data } = await axios.post('/create', newMovie)
    console.log(data)
  };

  return (
    <div className="adding">
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md="6">
            <h1>Добавить фильм</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter movie name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formGenre">
                <Form.Label>Movie video link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter movie link"
                  value={movie_video}
                  onChange={(e) => setMovie(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formGenre">
                <Form.Label>Movie image link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image link"
                  value={movie_image}
                  onChange={(e) => setMovieImage(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formReleaseDate">
                <Form.Label>Release Date</Form.Label>
                <Form.Control
                  type="date"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formRating">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="number"
                  max={5}
                  placeholder="Enter movie rating"
                  value={popularity}
                  onChange={(e) => setPopularity(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formRating">
                <Form.Label>End time</Form.Label>
                <Form.Control
                  placeholder="Enter movie time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Описание</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Введите описание"
                />
              </Form.Group>

              <Button className="mt-3" variant="primary" type="submit">
                Add Movie
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddMovie;
