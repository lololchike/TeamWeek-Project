import { Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./TeamLogo.JPG"

function PageNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="siteNavbarheader">
        <Container>
         <Navbar.Brand as={Link} to="/"
              
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }>
            <img src={logo} className="topLogoImg"></img> Éclat Online
            University
          </Navbar.Brand>
          <Nav className="mr-auto">
          <Nav.Link as={Link} to="/"
              
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Home
            </Nav.Link>

         <Nav.Link
              
              as={Link} to="/join"
              
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Join Us{" "}
            </Nav.Link> 

            <Nav.Link as={Link} to="/students"
              
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Our Students
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>

  );
}

export default PageNav;
