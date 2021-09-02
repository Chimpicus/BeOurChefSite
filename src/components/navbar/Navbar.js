const Navbar = () => {
    return ( 
      
            
            <nav class="navbar-expand-lg navbar-light bg-light">
            <img className="navbar-logo" 
            src="/images/logo.png"
            
            alt="BeOurChef logo">
            
            </img>
  <div class="navbar navbar container-fluid">
    <div class="navbar-socmed">
      <i class="navbar-socmed-link fab fa-instagram" href="#"></i>
      <i class="navbar-socmed-link fab fa-twitter"></i>
      </div>
    <button class="navbar-nav-toggler navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-nav-toggler-icon navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-auto" id="navbarNav">
      <ul class="navbar-nav ms-auto ">
        <li class="navbar-nav-link nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#home">HOME</a>
        </li>
        <li class="navbar-nav-link nav-item">
          <a class="nav-link text-light" href="#about">ABOUT</a>
        </li>
        <li class="navbar-nav-link nav-item">
          <a class="nav-link text-light" href="#guide">GUIDE</a>
        </li> <li class="navbar-nav-link nav-item">
          <a class="nav-link text-light" href="#download">DOWNLOAD</a>
        </li>
        <li class="navbar-nav-link nav-item">
          <a class="nav-link text-light" href="#contact">CONTACT</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
      
     );
}
 
export default Navbar;