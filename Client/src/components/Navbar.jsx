import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/components/navbar.scss';
import logo from '../images/tech.png';
// Sticky navbar effect
window.addEventListener("scroll" , function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky" , window.scrollY > 0);
})
function Navbar() {
  return (
<header>
<nav className="navbar navbar-light navbar-expand-lg bg-transparent bg-body-light">
  <div className="container-xl w-100">
    <NavLink className="navbar-brand fs-4" to='/'>
       <img  alt="" src={logo} loading='lazy'/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <div id="navicon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>

    <div className="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img alt="" src={logo} loading='lazy'/></h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
          <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to='/' label='Home'>Home</NavLink>
          </li>
          
           <li className="nav-item">
            <NavLink className="nav-link" to='/services'>Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/portfolio'>Our Protfolio</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to='/about'>About US</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/contact'>Contact Us</NavLink>
          </li>
        </ul>


        <div className='nav-left d-flex justify-content-end align-items-center'>
         <NavLink to='tel:+923216886880'><button className='mx-1 px-3 py-1 rounded spbtn'><i className='fa fa-phone mx-2'></i> Call Us</button></NavLink>
         <NavLink to='https://api.whatsapp.com/send?phone=+923224752036&text=Hi,%20I%20contacted%20you%20Through%20your%20website.'><button className='mx-1 px-3 py-1 rounded'><i className='fa fa-whatsapp mx-2'></i> Whats App</button></NavLink>
      </div>
      </div>

     
    </div>
  </div>
</nav>

</header>
  );
};

export default Navbar;