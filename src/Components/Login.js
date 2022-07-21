import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import Navs from "./Navs";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postdata = () => {
    axios
      .post(`http://127.0.0.1:8000/auth/login/`, {
        username,
        password,
      })
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem("token", res.data.token);
          navigate("/Home");
        }
      })
      .catch((err) => {
        alert("Please Enter correct data")
        console.log(err);
      });
  };
  return (
    <div className="App">
     <Navs />
     
      <br></br>
    
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              placeholder="User Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => {
                setPassword(e.target.value);
              }}
                type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          {/* <Link to="/Home" element={<Home/>}>lo</Link> */}
          <Button className='login' onClick={postdata}>Login</Button>
        </Form>
        <div id="DivLogin" class="veen">
          <Row>
            <Col className="LoginLeft">
              <div class="login-title splits mobile_view">
                <h2>
                  <span id="lblIamTitleCaption">مرحبا</span>
                </h2>
                <p class="textarea">
                  <span id="lblIamMessageCaption">
                    <h5> نظام ادارة الطوارئ . </h5>
                    <h6> الرجاء التأكد من صحة المعلومات المدخله .</h6>
                  </span>
                </p>
                <p></p>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </div>
              <Footer/>
    </div>
  );
}
