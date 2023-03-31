import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function PageNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='siteNavbarheader'>
        <Container>
          <Navbar.Brand href="#home">
          <img src="TeamLogo.JPG"
          className="topLogoImg" alt=''></img>Éclat Online University
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#join">Join Us</Nav.Link>
            <Nav.Link href="#students">Our Students</Nav.Link>
            <Nav.Link href="#login">Log In</Nav.Link>
          </Nav>
        
        </Container>
      </Navbar>
      
    </>
  );
}

export default PageNav;