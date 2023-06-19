import React from "react";
import {Link} from 'react-router-dom';
function Header() {

return(

<nav className="navbar navbar-light bg-light fixed-top" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"red"}}>ONLINE COSMETIC.LK</a>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Your function name</a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li> <Link to="/add" className="dropdown-item">ADD RETURN</Link></li>
            <li><a className="dropdown-item" href="#">update</a></li>
            <li><a className="dropdown-item" href="#">delete</a></li>
            <li><a className="dropdown-item" href="#">retviwe</a></li>
          </ul>
        </li>
      </ul>

    </div>
    </nav>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Function</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className="container-fluid">
           <div className="navbar-nav">
             <a className="nav-link active" href="#">Customer</a>
             <a className="nav-link active" href="#">Payment</a>
             <a className="nav-link active" href="#">Employee</a>
              <a className="nav-link active" href="#">Delivery</a>
           </div>
        </div>
      </div>
    </div>
  </div>
</nav>

)

}

export default Header;