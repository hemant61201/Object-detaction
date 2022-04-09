import React, { useDebugValue, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const NavbarAdmin = () => {

return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
      <div className="container-fluid">
        <a href="/adminhome" className='navbar-brand'>Bid-To-Buy</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='ul'>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/adminhome">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/aproduct">Add</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
)
}

export default NavbarAdmin