import React, { useEffect, useState } from "react";
import { Container, Table, Alert } from "react-bootstrap";
import axios from "axios";
import './users.css'
const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/get_users");
        setUsers(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);
  console.log(users);
  return (
    <div className="adding">
      <Container>
        <h2 className="mt-3">Список пользователей</h2>
        {error && <Alert variant="danger">Ошибка: {error}</Alert>}
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Имя</th>
              <th>Email</th>
              <th>Wishlist</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.isLove[0]?.movie_name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UserListPage;
