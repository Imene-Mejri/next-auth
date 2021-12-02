import React from "react";
import style from  '../styles/Nav.module.css'
import {useSelector} from 'react-redux'
function NavBar() {
  const auth = useSelector(state => state.auth)
  return (
    <div style={{ width: "100%" }}>
      <div className={style.c__nav}>
        <div className={style.auth}>
          {
            auth.authenticate !== true ? <div>
              <a href="#">sign in </a>
              &nbsp;&nbsp;
              <a href="#">register</a>
             </div>
             : <a href="#">logout</a>

          }
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ width: '100%' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/logo.png"  className="w-16 h-16"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact us
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
