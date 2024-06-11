import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './home.css'
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate()
  const handleSubmit = async(event) => {
    event.preventDefault();
    let newMas = { email: username, password: password }
    console.log(newMas)
    try {
      let response = await axios.post('/login', newMas);
      if (response.status === 200) {
        console.log(response.data.data.token)
        window.localStorage.setItem('token', response.data.data.token)
        window.localStorage.setItem('link', '/home')
        navigator('/home');

      } else if (response.status === 400) {
        alert('Ошибка: Неверные учетные данные');
      }
    } catch (error) {
      alert(`Ошибка: Неверные учетные данные`);
    }
  };

  return (
    <div className="login">
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
            <h1>Admin panel</h1>
          </div>
          <div className="card">
            <h5 className="card-header">Вход</h5>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Имя пользователя:
                  </label>
                  <input
                    type="email"
                    id="username"
                    
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Пароль:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Войти
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
