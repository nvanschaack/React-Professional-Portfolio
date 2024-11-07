import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../../assets/images/nell.jpeg";

export default function AboutMe() {
  return (
    <Container className="about-me-container">
      {" "}
      {/* Add a class for potential styling */}
      <Row>
        <Col className="text-center">
          <img
            src={profile}
            alt="Picture of me"
            style={{ height: "500px", borderRadius: "10px" }}
          />
        </Col>
        <Col className="text-center d-flex align-items-center">
          <p>
            As a retired Division I athlete from Georgetown University, I hold a
            Bachelor of Science in Nursing and have spent my early career as a
            Registered Nurse, where I developed a strong passion for
            helping others.
          </p>

          <p>
            After three fulfilling years in nursing, I sought a new challenge
            that would allow me to leverage my analytical skills and creativity.
            Encouraged by discussions with professionals who successfully
            transitioned to new careers, I discovered the field of web
            development. My early exposure to programming in a statistics class
            sparked an enthusiastic interest that led me to enroll in a web
            development bootcamp at the University of Texas.
          </p>

          <p>
            This decision marked a pivotal shift in my career journey, and I
            have embraced the opportunity to create impactful solutions in a
            dynamic industry. Now, I am eager to apply my diverse experiences
            and skills to meaningful projects that continue to support and
            uplift individuals in innovative ways.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
