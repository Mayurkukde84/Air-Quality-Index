import "./Header.scss";
import { Nav, Navbar, Container } from "react-bootstrap";
import dmglogo from "../components/images/dmglogo.png";
// Import the functions you need from the SDKs you need

function Head() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" >
        <Container className="nav-container">
          <Navbar.Brand className="logo">
            <img src={dmglogo} alt="logo" width="70px" height="70px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="nav-menu" >
              <h3>Home</h3>
              <h3>About Us</h3>
              <h3>
                Contact Us
              </h3>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Head;
