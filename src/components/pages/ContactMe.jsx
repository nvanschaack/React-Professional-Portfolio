import React, { useState } from "react";
import { Form, Col, Row, Button, Container, Card } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { toaster } from "evergreen-ui";

export default function ContactMe() {
  //contactFormData is the current value and setContactFormData is the updated value. contactFormData refers to the initial value of name, email, and message. setContactFormData is what is input by the user in the form's input fields
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChanges = (e) => {
    //this is spreading contactFormData (an object) so that the target.name (stands for either the name, email, or message) is set to the value that the user types in the input fields. Then this function will give new values to the setContactFormData
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLICKEY);
    emailjs
      .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
        from_name: contactFormData.name,
        from_email: contactFormData.email,
        message: contactFormData.message,
      })
      .then((res) => {
        if (res.status === 200) {
          toaster.notify("Email has been sent");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setContactFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-md-center">
          <Col xs={12} md={8} lg={6}>
            <Card
              className="shadow-lg border-0"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <Card.Body className="p-5">
                <h2 className="text-center mb-4" style={{ color: "#1a365d" }}>
                  Contact Me
                </h2>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4" controlId="formBasicName">
                    <Form.Label style={{ color: "#4a5568" }}>
                      Full Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={contactFormData.name}
                      onChange={handleChanges}
                      required
                      className="shadow-sm"
                      style={{ borderColor: "#e2e8f0" }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#4a5568" }}>
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={contactFormData.email}
                      onChange={handleChanges}
                      required
                      className="shadow-sm"
                      style={{ borderColor: "#e2e8f0" }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formBasicMessage">
                    <Form.Label style={{ color: "#4a5568" }}>
                      Message
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={contactFormData.message}
                      onChange={handleChanges}
                      required
                      className="shadow-sm"
                      style={{ borderColor: "#e2e8f0" }}
                    />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      className="shadow"
                      style={{
                        backgroundColor: "#2b6cb0",
                        borderColor: "#2b6cb0",
                        transition: "all 0.2s ease-in-out",
                      }}
                    >
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
