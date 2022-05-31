import React, { Component } from 'react'
import { Navbar,Nav,Container} from 'react-bootstrap'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import About from '../views/About';
import Contact from '../views/Contact';
import Home from '../views/Home';
import './Navbar.css'

class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Router>
            <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container>
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/link2"}>Link2</Nav.Link>
                    <Nav.Link as={Link} to={"/link3"}>Link3</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <div>
            <Routes>
                <Route path='/' element={<Home/>} exact />
                <Route path='/link2' element={<About/>} exact />
                <Route path='/link3' element={ <Contact/>} exact />
            </Routes>
            </div>
        </Router>
      </div>
    )
  }
}
export default NavbarComp;
