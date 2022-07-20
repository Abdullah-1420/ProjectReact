import React from 'react'
import {Navbar , Container , Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";


export default function NavBar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };
  return (
    <div >
         <Navbar style={{backgroundColor:"#0d8c60"}} variant="light">
        <Container>
          <Nav className="me-auto " >
          <Nav.Link ><Link className="aNav" to="/Home">Home</Link></Nav.Link>
            <Nav.Link ><Link className="aNav" to="/Pationts">Pationts</Link></Nav.Link>
            <Nav.Link ><Link className="aNav" to="/Dignosis">Dignosis</Link></Nav.Link>
          </Nav>
          <Navbar.Brand>
          <button
        onClick={() => {
          logout();
        }}
      >Logout</button>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
