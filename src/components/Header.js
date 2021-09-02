
// file been replaced by Navbar.js due to replacing react-bootstrap with vanilla bootstrap 5. 
//reference only


const Header = () => {
    return ( 
        <div className="header">
          
         
             
  <Navbar className="header-navbar" fixed="sticky" expand="lg" variant="dark">
  
  <div className="socmed"></div>
  
  
 
    
      
    <Navbar.Brand className="header-navbar-brand" href="#home">
    <div className="header-image">
    <img  
          alt=""
          src="/images/logo.png"
          width="110"
          height="110"
          className="#"
        />{' '}
        </div>
   
      </Navbar.Brand>
      
      
      <Navbar.Toggle className="header-navbar-toggle" aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="header-navbar-nav ms-auto">
        <Nav.Link className="header-navbar-nav-link" href="#home">HOME</Nav.Link>
        <Nav.Link className="header-navbar-nav-link" href="#about">ABOUT</Nav.Link>
        <Nav.Link className="header-navbar-nav-link" href="#testimonials">TESTIMONIALS</Nav.Link>
        <Nav.Link className="header-navbar-nav-link" href="#guide">GUIDE</Nav.Link>
        <Nav.Link className="header-navbar-nav-link" href="#download">DOWNLOAD</Nav.Link>
        <Nav.Link className="header-navbar-nav-link" href="#contact">CONTACT</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
    
  </Navbar>
  
        </div>
     );
}
 
export default Header;