import React from 'react'
import Project from '../Project'
import projectData from '../../assets/projectData.json'
import { Container, Col, Row } from 'react-bootstrap'

export default function Portfolio() {
  return (
    <Container fluid>
      <Row>
        {projectData.map((item, i) => (
          <Col>
            <Project key={i} data={item} />
          </Col>
        ))}

      </Row>
    </Container>
    // <div className='d-flex flex-wrap justify-content-center'>

    // </div>
  )
}
