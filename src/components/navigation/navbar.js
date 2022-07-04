import React from "react";
import {Link} from 'react-router-dom'
import './style.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar  navbar-align navbar-dark bg-dark">
        <div className="container-fluid">
        <Link to='/'>
            <img src= './pokemon.png' width='100' alt='100'/>
        </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
              <li className="nav-item">
              <Link className="nav-link" to='/home'>
                  Home
                </Link>
              </li>
               <li className="nav-item">
              <Link className="nav-link" to='/pokemon'>
                  Pokemon
                </Link>
              </li>
                <Link className="nav-link" to='/'>
                  About
                </Link>
              </li>
             
              
        
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
