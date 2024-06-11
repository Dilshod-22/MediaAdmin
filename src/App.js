import "./App.css";
import Login from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/Movies";
import MovieDetailsPage from "./pages/detail";
import AddMovie from "./pages/addMovie";
import NavbarComponent from "./components/navbar";
import UserListPage from "./pages/Users";
import AuthorPage from "./pages/Authors";
function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MoviesPage />} />
        <Route path="/detail/:id" element={<MovieDetailsPage />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/author" element={<AuthorPage />} />
      </Routes>
    </div>
  );
}

export default App;
