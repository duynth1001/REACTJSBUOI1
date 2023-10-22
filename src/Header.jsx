import React from 'react'

export const Header = () => {
  return (
    <div >
<nav className="navbar navbar-expand-lg navbar-light bg-dark ">
  <a className="nav-link text-white " href="#">Start Bootstrap</a>
  <div className="navbar-collapse collapse justify-content-end" id="navbarSupportedContent">

    <ul className="navbar-nav ">
      <li className="nav-item ">
        <a className="nav-link text-white" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Services</a>
      </li>
    </ul>


  </div>
</nav>

    </div>
  )
}

