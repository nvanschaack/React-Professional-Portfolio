import React from 'react'
import Project from '../Project'
import projectData from '../../assets/projectData.json'
import { Container, Col, Row } from 'react-bootstrap'

export default function Portfolio() {
  return (
    <Container fluid>
      <Row>
        {projectData.map((item, i) => (
          //Col needs the key b/c it's wrapping around Project 
          //whatever is the outer-most element returned from the map NEEDS to have the key
          <Col key={i}>
            <Project data={item} />
          </Col>
        ))}

      </Row>
    </Container>
  )
}
