import React from 'react'
import {Navbar , Container} from 'react-bootstrap'
export default function Navs() {
  return (
    <div>
        <Navbar className ="navbarTop" bg="light" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
            alt=""
            src="https://www.moh.gov.sa/_layouts/15/MOH/Internet/New/New/Img/logo-light.png"
            width="230"
            height="70"
            className="d-inline-block align-top"
          />{' '}
          <img
              alt=""
              src="https://www.moh.gov.sa/_layouts/15/MOH/Internet/New/images/vision.png"
              width="100"
              height="70"
              className="d-inline-block align-top"
            />{' '}
          
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
