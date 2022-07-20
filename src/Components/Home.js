import React from "react";
import NavBar from "./NavBar";
import Navs from "./Navs";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <div class="text-center">
      <Navs />
      <NavBar />
      <Container>
        <Row className="mt-2">
          <Col>
            <Card className="mt-2" style={{ width: "18rem" }}>
              <Card.Img
                height={"200px"}
                variant="top"
                src="https://post.healthline.com/wp-content/uploads/2020/08/Doctors_For_Men-732x549-thumbnail-1-732x549.jpg"
              />
              <Card.Body>
                <Card.Title>Doctors</Card.Title>
                <Card.Text>
                  <h4>[30]</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mt-2" style={{ width: "18rem" }}>
              <Card.Img
                height={"200px"}
                variant="top"
                src="https://149781606.v2.pressablecdn.com/wp-content/uploads/2021/09/how-to-become-a-nurse-hero-1200x628-1.jpg"
              />
              <Card.Body>
                <Card.Title>Nurses</Card.Title>
                <Card.Text>
                  <h4>[55]</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col>
            <Card className="mt-2" style={{ width: "18rem" }}>
              <Card.Img
                height={"200px"}
                variant="top"
                src="https://thumbs.dreamstime.com/b/patients-hospital-reception-desk-registering-paying-desk-sitting-waiting-doctor-healthcare-concept-194252198.jpg"
              />
              <Card.Body>
                <Card.Title>Reception</Card.Title>
                <Card.Text>
                  <h4>[10]</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col>
            <Card className="mt-2" style={{ width: "18rem" }}>
              <Card.Img
                height={"200px"}
                variant="top"
                src="https://www.collinsdictionary.com/images/full/patient_589302497_1000.jpg"
              />
              <Card.Body>
                <Card.Title>Patients</Card.Title>
                <Card.Text>
                  <h4>[10]</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col>
            <Card className="mt-2" style={{ width: "18rem" }}>
              <Card.Img
                height={"200px"}
                variant="top"
                src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/9/shutterstock_1706565550_(1).jpg"
              />
              <Card.Body>
                <Card.Title>Dignosis</Card.Title>
                <Card.Text>
                  <h4>[30]</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col>
            <Card className="mt-2" style={{ width: "18rem" }}>
              <Card.Img
                height={"200px"}
                variant="top"
                src="https://www.wikihow.com/images/thumb/f/fe/Read-a-Doctor%27s-Prescription-Step-1-Version-5.jpg/v4-460px-Read-a-Doctor%27s-Prescription-Step-1-Version-5.jpg.webp"
              />
              <Card.Body>
                <Card.Title>Prescription</Card.Title>
                <Card.Text>
                  <h4>[40]</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
