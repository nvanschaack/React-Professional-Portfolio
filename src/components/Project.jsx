import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Project({data}) {
  return (
    <Card style={{ width: '27%', margin: '10px' }}>
        <Card.Img variant="top" src={data.projectImage} />
        <Card.Body>
          <Card.Title>{data.projectName}</Card.Title>
          <Card.Text>
            {data.projectDescription}
          </Card.Text>
          <Button variant="primary" href={data.projectLink}>Deployed Website</Button>
          <Button variant="primary" href={data.projectRepo}>Repository Link</Button>
        </Card.Body>
      </Card>
  )
}
