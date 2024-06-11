import React from 'react';
import { Container, Row, Col, Card, } from 'react-bootstrap';

const AuthorPage = () => {
  const author = {
    name: 'Камолиддинов Сарварбек',
    bio: 'Камолиддинов Сарварбек - Инжинер программист из группы 654-20, профессиональный мобильный разработчик на языке программирование Dart и фреймворке Flutter. Без никаких трудностей подключает на свой проект Back-End Запустил много проектов и отвечающий за пользовательский интерфейс что бы пользователи могли удобно пользоваться. Если появляются ошибки или проблемы просим связываться с нами!',
    website: '',
    imageUrl: 'https://images.uzum.uz/ckn8btjk9fq6u2tdhha0/original.jpg'
  };

  const authorN = {
    name: 'Нуриддинов Аслиддин',
    bio: 'Нуриддинов Аслиддин - Инжинер программист из группы 655-20, профессиональный MERN-stack-разработчик. Использует на разработке программных продуктов язык программирование JavaScript. Если необходимо переключает направлению на мобильную разработку на фреймворке React-Native, Expo. Back-End считается основная направления, использует технологию Nodejs Expressjs.',
    website: '',
    imageUrl: 'https://art.kartinkof.club/uploads/posts/2023-07/1689651637_art-kartinkof-club-p-idei-dlya-srisovki-litso-muzhchini-legkie-71.jpg'
  };

  return (
    <Container style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 className="my-4">Information Authors</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={author.imageUrl} alt={author.name} />
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>{author.name}</Card.Title>
              <Card.Text>
                <strong>Биография:</strong> {author.bio}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={authorN.imageUrl} alt={authorN.name} />
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>{authorN.name}</Card.Title>
              <Card.Text>
                <strong>Биография:</strong> {authorN.bio}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthorPage;
