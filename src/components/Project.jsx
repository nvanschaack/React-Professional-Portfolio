import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Project({ data }) {
  return (
    <Card style={{ 
      border: '5px solid #9370DB',
      borderRadius: '8px',
      boxShadow: '0 16px 16px rgba(147, 112, 219, 0.2)' 
    }}>
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
        <Button variant="primary" href={data.projectLink} style={{ backgroundColor: '#2b6cb0', margin: '2%' }}>Deployed Website</Button>
        <Button variant="primary" href={data.projectRepo} style={{ backgroundColor: '#2b6cb0' }}>Repository Link</Button>
        {/* </div> */}
      </Card.Body>
    </Card>
  )
}
