import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';

const style = {
    iconSize: {
        fontSize: '45px'
    }
}

export default function Footer() {
    return (
        // <footer>
        //     <a href="https://github.com/nvanschaack" style={style.iconSize}>
        //         <FaGithub />
        //     </a>
        //     <a href="https://www.linkedin.com/in/nell-van-schaack/" style={style.iconSize}>
        //         <FaLinkedin />
        //     </a>
        // </footer>
        <footer className="text-center py-3 ">
      <Container>
        <Row>
          <Col xs={12}>
            <a href="https://github.com/nvanschaack" style={{ fontSize: '1.5rem' }}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nell-van-schaack/" style={{ fontSize: '1.5rem', marginLeft: '10px' }}>
              <FaLinkedin />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
    )
}
