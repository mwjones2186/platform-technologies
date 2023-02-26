import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/Contact.css";
import Form from "react-bootstrap/Form";
import { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const refForm = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u3nl63j', 'template_nxfxj0u', refForm.current, 'nd5F-JQfuBSg3CQaS')
      .then(() => {
        alert('Message successfully sent!');
        e.target.reset();
      }, () => {
        alert('Failed to send message, please try again')
      });
  };



  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  return (
    <>
      <Container>
        <Row className="contanier contact-page">
          <Col className="leftText" xl={6} lg={6} sm={12}>
            <div>
              <h1>How Can We Help?</h1>
              <p>
                Want to get in touch? Fill out the form and we will get in touch. Let us know how we can help!
              </p>
              <h3>Need to place an order?</h3>
              <Button href="/"> Click Here!</Button>
            </div>
          </Col>

          <Col xl={6} lg={6} xs={12} className="text-zone">
            <h1>GET IN TOUCH</h1>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row>
                <Col xl={6} xs={6}>
                  <Form.Group className="contactInput firstName" controlId="formFirstName">
                    {/* <Form.Label>First Name</Form.Label> */}
                    <Form.Control required type="name" placeholder="First Name" />
                    {/* <Form.Text className="text-muted">
                  Please enter your First Name.
                </Form.Text> */}
                  </Form.Group>
                </Col>

                <Col xl={6} xs={6}>
                  <Form.Group className="contactInput lastName" controlId="formFirstName">
                    {/* <Form.Label>Last Name</Form.Label> */}
                    <Form.Control required type="name" placeholder="Last Name" />
                    {/* <Form.Text className="text-muted">
                  Please enter your Last Name.
                </Form.Text> */}
                  </Form.Group>
                </Col>

              </Row>


              <Row>
                <Col xl={12}>
                  <Form.Group className="contactInput" controlId="formSuffix">
                    <Form.Select aria-label="Default select example">
                      <Form.Label>Suffix</Form.Label>
                      <option>Suffix</option>
                      <option value="1">MD</option>
                      <option value="2">DO</option>
                      <option value="3">DPM</option>
                      <option value="4">Sr.</option>
                      <option value="5">Jr.</option>
                      <option value="6">III</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xl={12}>
                  <Form.Group className="contactInput" controlId="formEmail">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control required type="name" placeholder="Email" />
                    {/* <Form.Text className="text-muted">
                  Please enter your Email.
                </Form.Text> */}
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xl={12}>
                  <Form.Group className="contactInput" controlId="formPhone">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control type="name" placeholder="Contact Number" />
                    {/* <Form.Text className="text-muted">
                  Please enter your phone number.
                </Form.Text> */}
                  </Form.Group>
                </Col>
              </Row>


              <Row>
                <Col xl={12}>
                  <Form.Group className="contactInput" controlId="formAffiliation">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control type="name" placeholder="Please tell us your role within Healthcare" />
                    {/* <Form.Text className="text-muted">
                  Please enter your Affiliation.
                </Form.Text> */}
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xl={12}>
                  <Form.Group required className="contactInput" controlId="formSuffix">
                    <Form.Select aria-label="Default select example">
                      <Form.Label>Products</Form.Label>
                      <option>Products</option>
                      <option value="1">I'd love to learn more about the Novelle Suction Device!</option>
                      <option value="2">I'd love to learn more about the Visibot™</option>
                      <option value="3">other</option>
                    
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xl={12}>
                  <Form.Group className="contactInput" controlId="formSubject">
                    <Form.Control required type="name" placeholder="Enter your message to us!" />
                    {/* <Form.Text className="text-muted">
                  Please enter a message.
                </Form.Text> */}
                  </Form.Group>
                </Col>
              </Row>

              <button className="contactBtn" href={sendEmail} type="submit">Send</button>

            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
