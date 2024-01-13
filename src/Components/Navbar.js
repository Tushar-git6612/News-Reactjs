import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
 
export class Navbar extends Component {
  render() {
    return (
      <>
         <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid">
               <h5 className="navbar-brand mb-0">News</h5>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                     <Link className="nav-link" to="/">business</Link>
                     </li>
                     <li className="nav-item">
                     <Link className="nav-link" to="/entertainment">entertainment</Link>
                     </li>
                     <li className="nav-item">
                     <Link className="nav-link" to="/general">general</Link>
                     </li>
                     <li className="nav-item">
                     <Link className="nav-link" to="/health">health</Link>
                     </li>
                     <li className="nav-item">
                     <Link className="nav-link" to="/science">science</Link>
                     </li>
                     <li className="nav-item">
                     <Link className="nav-link" to="/sports">sports</Link>
                     </li>
                     <li className="nav-item">
                     <Link className="nav-link" to="/technology">technology</Link>
                     </li>
                  </ul>
                  {/* <span className="navbar-text">
                  Navbar text with an inline element
                  </span> */}
               </div>
            </div>
         </nav>
         <Outlet/>
      </>
    )
  }
}

export default Navbar