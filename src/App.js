import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import React, {Component} from "react";

import Addtkdapp from "./components/add-tkdapp.component";
import TkdappList from "./components/tkdapp-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/SocialBox" className="navbar-brand">
            Christian Reyes
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/SocialBox"} className="nav-link">
                Social Box
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
          <h2>Boxer social media</h2>
          </div>
          <Routes>
            <Route path="/" element={<TkdappList />} />
            <Route path="add" element={<Addtkdapp />} />
            <Route path="/SocialBox" element={<TkdappList />} />

          </Routes>
        
      </div>
    );
  }
}
export default App;

/**

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import React, {Component} from "react";

import AddsocialBox from "./components/add-box.component";
import SocialBoxList from "./components/box-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/socialBox" className="navbar-brand">
            Christian Reyes
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/socialBox"} className="nav-link">
                Social Box
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
          <h2>Poomsae social media</h2>
          </div>
          <Routes>
            <Route path="/" element={<SocialBoxList />} />
            <Route path="add" element={<AddsocialBox />} />
            <Route path="/SocialBox" element={<SocialBoxList />} />

          </Routes>
        
      </div>
    );
  }
}
export default App;
 */