import React, { useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

let masButton = [
  {
    id: 1,
    title: "Главная",
    link: "/home",
    color: 'btn-warning'
  },
  {
    id: 2,
    title: "Добавить",
    link: "/add",
    color: 'btn-warning'

  },
  {
    id: 3,
    title: "Пользователи",
    link: "/users",
    color: 'btn-warning'

  },
  {
    id: 4,
    title: "Авторы",
    link: "/author",
    color: 'btn-warning'

  },
  {
    id: 5,
    title: "Выход",
    link: "/",
    color: 'btn-danger'

  },
];

const NavbarComponent = () => {
  const navigator = useNavigate();
  let getItem;
  let token = localStorage.getItem("token");
  useEffect(() => {
    const tokens = () => {
      let app = localStorage.getItem("token");
      return app;
    };

    tokens();
  }, []);

  const logOutHandler = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem('link')
    navigator("/");
  };

  const handler = (id, link) => {
    navigator(link)
    window.localStorage.setItem('link', link)
    console.log(getItem)
    if(id == 5){
      logOutHandler()
    }
  }
  getItem = window.localStorage.getItem('link')
  console.log(getItem)
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Админ КиноМан</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {token && (
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {masButton.map((item, idx) => (
                  <Button key={idx} 
                    className={`btn ${getItem == item.link ? 'btn-success' : item.color} mx-2`}
                    onClick={() => handler(item.id, item.link)}
                  >
                    {item.title}
                  </Button>
                ))}
              </Nav>
            </Navbar.Collapse>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
