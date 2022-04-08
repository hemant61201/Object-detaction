import React, { useDebugValue, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './Assets/navbar.css';
// import './Display';
// import Display from './Display';

const NavbarUser = () => {
  const history = useHistory();
  const [input,setInput] = useState('');
  const handleSearch = async(e) => {
      e.preventDefault();

      const res = await fetch('/viewproducts',{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            pname : input
        })
    }); 
    // console.log(res);
    // const {pname} =  res.data;
    history.push("/display");

    const setInput = await res.json();
    console.log(setInput.products);
    
    // console.log("This is data" + res.data );
  };


  return(   

    <div>
      {/* <Display data={setInput}/> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
  <div className="container-fluid">
    <a href="/userhome" className='navbar-brand'>Bid-To-Buy</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <img src="/images/logo.png" height="90px" width="90px" id="img" /> */}
      
      <ul className="navbar-nav me-auto" id='ul'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/userhome">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link active" href="/signup">SignUp</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link active" href="/contact">Feedback</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/history">History</a>
        </li>
        <li className="nav-item">
            <NavLink to={{ pathname: "http://localhost:8501" }} target="Upload">Upload</NavLink>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link active" href="/aproduct">Add</a>
        </li> */}
        
         
{/*     <li className="nav-item">
          <a className="nav-link active" href="/">LogOut</a>
        </li> */}
        
      </ul>

      <form form class="d-flex">
        <input class="form-control me-2 " type="search" name='input' id='input'
        value={input} onChange={(e) => setInput(e.target.value)}
        placeholder="Search by Name" aria-label="Search"/>
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