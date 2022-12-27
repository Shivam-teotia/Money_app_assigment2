import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./component/Home";
import { CreateBlog } from "./component/CreateBlog";
import UpdateBlog from "./component/UpdateBlog";
function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/createBlog" className="link">
          Create Blog
        </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/createBlog" element={<CreateBlog />} />
        <Route exact path="/update" element={<UpdateBlog />} />
      </Routes>
    </div>
  );
}

export default App;
