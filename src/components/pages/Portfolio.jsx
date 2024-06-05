import React from 'react'
import Project from '../Project'
import projectData from '../../assets/projectData.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// const projectData = [
//   {
//     projectName: 'project one', 
//     projectDescription: 'sdfafsd asdf asdf asdf'
//   },
//   {
//     projectName: 'project two', 
//     projectDescription: ''
//   },
//   {
//     projectName: 'project three', 
//     projectDescription: ''
//   },
// ]

export default function Portfolio() {
  return (
    <>
      {/* {projectData.map((item)=> (
      <Project data = {item}/>
    ))} */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/300px300" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}
