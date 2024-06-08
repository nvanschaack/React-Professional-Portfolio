import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';

// const style = {
//     iconSize: {
//         fontSize: '45px'
//     }
// }

export default function Footer() {
    return (
        <footer className="text-center py-3 ">
      <Container>
        <Row>
          <Col >
          <p>
            <h6>Thank you for visiting Nell's Professional Portfolio</h6>
          </p>
            <a href="https://github.com/nvanschaack" style={{ fontSize: '1.5rem', color: 'black' }}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nell-van-schaack/" style={{ fontSize: '1.5rem', marginLeft: '10px', color: 'black' }}>
              <FaLinkedin />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
    )
}
