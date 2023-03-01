import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/Contact.css";
import Form from "react-bootstrap/Form";
import { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import emailjs, { send } from '@emailjs/browser';




export default function Contact() {

  const refForm = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ohv8iw6', 'template_wyjo3jx', refForm.current, 'nd5F-JQfuBSg3CQaS')
      .then(() => {
        alert('Message successfully sent!');
        e.target.reset();
      }, () => {
        alert('Failed to send message, please try again')
      });
  };



  const [validated, setValidated] = useState(false);

  const handleSubmit = function (event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    sendEmail()
    setValidated(true);
  }

  return (
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

          <Form ref={refForm} onSubmit={handleSubmit} noValidate validated={validated} >
            <Row>

              {/* first name */}
              <Col xl={6} xs={6}>
                <Form.Group className="contactInput firstName" controlId="formFirstName">
                  <Form.Control required type="name" name="firstName" placeholder="First Name" />
                </Form.Group>
              </Col>

              {/* last name */}
              <Col xl={6} xs={6}>
                <Form.Group className="contactInput lastName" controlId="formFirstName">
                  <Form.Control required type="name" name="lastName" placeholder="Last Name" />
                </Form.Group>
              </Col>

            </Row>


            <Row>
              <Col xl={12}>
                <Form.Group className="contactInput" controlId="formSuffix">
                  <Form.Select aria-label="Default select example">
                    <Form.Label>Suffix</Form.Label>
                    <option>Suffix</option>
                    <option name="suffix" value="1">MD</option>
                    <option name="suffix" value="2">DO</option>
                    <option name="suffix" value="3">DPM</option>
                    <option name="suffix" value="4">Sr.</option>
                    <option name="suffix" value="5">Jr.</option>
                    <option name="suffix" value="6">III</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xl={12}>
                <Form.Group className="contactInput" controlId="formEmail">
                  <Form.Control required type="email" name="email" placeholder="Email" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xl={12}>
                <Form.Group className="contactInput" controlId="formPhone">
                  <Form.Control type="tel" name="tel" placeholder="Contact Number" />
                </Form.Group>
              </Col>
            </Row>


            <Row>
              <Col xl={12}>
                <Form.Group className="contactInput" controlId="formAffiliation">
                  <Form.Control type="text" name="affiliation" placeholder="Please tell us your role within Healthcare" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xl={12}>
                <Form.Group required className="contactInput" controlId="formSuffix">
                  <Form.Select name="products" aria-label="Default select example">
                    <Form.Label>Products</Form.Label>
                    <option>Products</option>
                    <option name="suffix" value="1">I'd love to learn more about the Novelle Suction Device!</option>
                    <option name="suffix" value="2">I'd love to learn more about the Visibot™</option>
                    <option name="suffix" value="3">other</option>

                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xl={12}>
                <Form.Group className="contactInput" controlId="formSubject">
                  <Form.Control required type="name" name="message" placeholder="Enter your message to us!" />
                </Form.Group>
              </Col>
            </Row>

            <button id="contactBtnSubmit" className="contactBtn" href={sendEmail} type="submit">Send</button>

          </Form>
        </Col>
      </Row>
    </Container>
  );
}
