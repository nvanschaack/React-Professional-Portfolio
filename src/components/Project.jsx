import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Project({ data }) {
  return (
    <Card
    // style={{ width: '18px', margin: '10px' }}
    >
      <Card.Img variant="top" src={data.projectImage} />
      <Card.Header as='h5'>{data.projectName}</Card.Header>
      <Card.Body>
        <Card.Title className='mb-4'>
          {data.projectDescription}
        </Card.Title>
    
        <footer className='blockquote-footer'>
          {data.techUsed}
        </footer>
        {/* Added a container div */}
        {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>  */}
        <Button variant="primary" href={data.projectLink} style={{ backgroundColor: 'hsl(210, 80%, 60%)', margin: '2%' }}>Deployed Website</Button>
        <Button variant="primary" href={data.projectRepo} style={{ backgroundColor: 'hsl(210, 80%, 60%)' }}>Repository Link</Button>
        {/* </div> */}
      </Card.Body>
    </Card>
  )
}
