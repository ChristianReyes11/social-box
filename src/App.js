import React,{Component} from "react";
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import AddAstro from "./components/astro-app.component";
import AstroList from "./components/astro-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>CRUD SOCIAL-BOX</h2>
          <Routes>
            <Route path="/" element={<AstroList />} />
            <Route path="add" element={<AddAstro />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
