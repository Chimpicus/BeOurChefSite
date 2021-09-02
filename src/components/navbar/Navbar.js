const Navbar = () => {
    return ( 
      
            
            <nav className="navbar-expand-lg navbar-light bg-light">
            <img className="navbar-logo" 
            src="https://beourchef.co.uk/wp-content/uploads/2020/07/logo.png"
            alt="BeOurChef logo"> 
            </img>
  <div className="navbar navbar container-fluid">
    <div className="navbar-socmed">
      <i className="navbar-socmed-link fab fa-instagram" href="#"></i>
      <i className="navbar-socmed-link fab fa-twitter"></i>
      </div>
    <button className="navbar-nav-toggler navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-nav-toggler-icon navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-auto" id="navbarNav">
      <ul className="navbar-nav ms-auto ">
        <li className="navbar-nav-link nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#home">HOME</a>
        </li>
        <li className="navbar-nav-link nav-item">
          <a className="nav-link text-light" href="#about">ABOUT</a>
        </li>
        <li className="navbar-nav-link nav-item">
          <a className="nav-link text-light" href="#guide">GUIDE</a>
        </li> <li className="navbar-nav-link nav-item">
          <a className="nav-link text-light" href="#download">DOWNLOAD</a>
        </li>
        <li className="navbar-nav-link nav-item">
          <a className="nav-link text-light" href="#contact">CONTACT</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


      
     );
}
 
export default Navbar;