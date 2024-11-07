import React from "react";
import pdf from "../../assets/resume.pdf";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function Resume() {
  return (
    <Container className="my-1">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center mb-4">Professional Summary</h2>
          <Card className="p-4 shadow-sm">
            <p className="text-center">
              A highly adaptable software engineer with a unique background in
              healthcare, combining technical expertise with proven skills in
              critical thinking and problem-solving. Experienced in full-stack
              development with a focus on creating impactful, user-centered
              solutions.
            </p>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h3 className="text-center mb-3">Technical Skills</h3>
          <Card className="p-4 shadow-sm">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {[
                "JavaScript",
                "React",
                "HTML",
                "CSS",
                "MySQL",
                "Git",
                "Node",
                "Express",
                "Bootstrap",
                "MongoDB",
                "GraphQL",
              ].map((skill) => (
                <span key={skill} className="badge bg-primary p-2 m-1">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col md={6}>
          <h3 className="text-center mb-2">Latest Project:</h3>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>FinHub Application</Card.Title>
              <Card.Text>
                Built and deployed a desktop widget for JP Morgan displaying
                real-time financial indicators. Features include:
                <ul>
                  <li>RESTful APIs for real-time data retrieval</li>
                  <li>Responsive design with React-Bootstrap</li>
                  <li>Cross-platform compatibility using Electron</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <h3 className="text-center mb-2">Education:</h3>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Full Stack Web Development Certificate</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                University of Texas, Austin
              </Card.Subtitle>
              <hr />
              <Card.Title>Bachelor of Science in Nursing</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Georgetown University
              </Card.Subtitle>
              <Card.Text className="text-muted">
                NCAA Division I Student-Athlete
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center mt-5">
        <Col className="mt-4">
          <a href={pdf} download>
            <Button
              variant="primary"
              size="lg"
              className="shadow"
              style={{
                backgroundColor: "#2b6cb0",
                borderColor: "#2b6cb0",
                transition: "all 0.2s ease-in-out",
              }}
            >
              Download Full Resume
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

// export default function Resume() {
//   return (
//     <div className="m-5">
//       <p>
//         <strong>Technical Skills:</strong> JavaScript | React | HTML | CSS |
//         MySQL | Git | Node | Express | Bootstrap | MongoDB | GraphQL
//       </p>
//       <p>If you'd like to check out my resume, click the button below.</p>
//       <a href={pdf} download>
//         <button>download resume</button>
//       </a>
//     </div>
//   );
// }
