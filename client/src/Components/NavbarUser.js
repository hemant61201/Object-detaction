import React, { useDebugValue, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
// import './Assets/navbar.css';

const NavbarUser = () => {
const history = useHistory();
const handleSearch = async(e) =>{
  history.push("/display");
}
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
        <div className="container-fluid">
          <a href="/userhome" className='navbar-brand'>Bid-To-Buy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <img src="/images/logo.png" height="90px" width="90px" id="img" /> */}

            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='ul'>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/userhome">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/contact">Feedback</a>
              </li>

              <li className="nav-item">
                <NavLink to={{ pathname: "http://localhost:8501" }} className="nav-link active" target="Upload">Upload</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/userhome">Logout</a>
              </li>

            </ul>
            <form form class="d-flex">
              <input class="form-control me-2 " type="search" name='input' id='input'
                onClick={handleSearch}
                placeholder="Search by Name" aria-label="Search" />
              <button className="btn btn-outline-success"
                 onClick={handleSearch} 
                type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarUser