import React, { useState } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { toaster } from 'evergreen-ui';


export default function ContactMe() {

  //contactFormData is the current value and setContactFormData is the updated value. contactFormData refers to the initial value of name, email, and message. setContactFormData is what is input by the user in the form's input fields
  const [contactFormData, setContactFormData] = useState({ name: '', email: '', message: '' });
  
 

  const handleChanges = (e) => {
    //this is spreading contactFormData (an object) so that the target.name (stands for either the name, email, or message) is set to the value that the user types in the input fields. Then this function will give new values to the setContactFormData
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value })
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLICKEY)
    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: contactFormData.name,
        from_email: contactFormData.email,
        message: contactFormData.message
      }).then((res) => {
        if (res.status === 200){
          toaster.notify('Email has been sent')
        }        
      }).catch((error) => {
        console.log(error);
      })

    setContactFormData({ name: '', email: '', message: '' })
  };

  return (
    <>   

      <section style={{ border: '1px solid blue', padding: '20px', margin: '40px' }}>
        <h2>Contact Me</h2>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={contactFormData.name}
                  onChange={handleChanges}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={contactFormData.email}
                  onChange={handleChanges}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={contactFormData.message}
                  onChange={handleChanges}
                  required
                />
              </Form.Group>

              <Button variant="secondary" type="submit" className="mt-3 mx-auto">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </section>
    </>
  )

}

