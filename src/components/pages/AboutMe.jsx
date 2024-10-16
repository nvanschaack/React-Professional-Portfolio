import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import profile from '../../assets/images/nell.jpeg'

export default function AboutMe() {
    return (
        <Container className="about-me-container"> {/* Add a class for potential styling */}
            <Row>
                <Col className='text-center'>
                    <img
                        src={profile}
                        alt="Picture of me"
                        style={{ height: '500px', borderRadius: '10px' }}
                    />
                </Col>
                <Col className="text-center d-flex align-items-center" >
                    <p>After graduating from Georgetown University in 2021 with a Bachelor of Science in Nursing, I honed my problem-solving and critical thinking skills through 3 years as a registered nurse. Now, I'm passionate about applying those skills to the world of software development. Having completed a full-stack web development bootcamp at The University of Texas, I'm eager to learn and grow as a software engineer, utilizing my existing skillset and embracing the challenges of my next role.</p>
                </Col>
            </Row>
        </Container>
    )
}
