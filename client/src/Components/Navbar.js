import React, { useDebugValue } from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Assets/navbar.css';

const Navbar = () => {
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
  <div className="container-fluid">
    <a href="/" className='navbar-brand'>Bid-To-Buy</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <img src="/images/logo.png" height="90px" width="90px" id="img" /> */}
      
      <ul className="navbar-nav me-auto" id='ul'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/signup">SignUp</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/contact">Feedback</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/history">History</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/upload">Upload</a>
        </li>
        
         
{/*     <li className="nav-item">
          <a className="nav-link active" href="/">LogOut</a>
        </li> */}
        
      </ul>

      <form form class="d-flex">
        <input class="form-control me-2 " type="search" placeholder="Search by Name" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar