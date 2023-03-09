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

  const [validated, setValidated] = useState(false);

  const sendEmail = (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      emailjs.sendForm('service_ohv8iw6', 'template_wyjo3jx', refForm.current, 'nd5F-JQfuBSg3CQaS')
        .then(() => {
          alert('Message successfully sent!');
          e.target.reset();
          setValidated(true);
          document.location.reload();
        }, () => {
          alert('Failed to send message, please try again')
        });
    }
    e.preventDefault();
    setValidated(true);
  };

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
            {/* need to switch the href to wherever their website is to place order */}
            <Button className="placeOrderBtn" href="/"> Click Here!</Button>
          </div>
        </Col>

        <Col xl={6} lg={6} xs={12} className="text-zone">
          <h1>GET IN TOUCH</h1>

          <Form className="contactForm" ref={refForm} onSubmit={sendEmail} noValidate validated={validated} >
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
                  <Form.Select className="suffixDropDown" name="suffix" aria-label="Default select example">
                    <Form.Label>Suffix</Form.Label>
                    <option>Suffix</option>
                    <option name="suffix" value="MD">MD</option>
                    <option name="suffix" value="DO">DO</option>
                    <option name="suffix" value="DPM">DPM</option>
                    <option name="suffix" value="Sr.">Sr.</option>
                    <option name="suffix" value="Jr.">Jr.</option>
                    <option name="suffix" value="III">III</option>
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
                  <Form.Control required type="tel" name="tel" placeholder="Contact Number" />
                </Form.Group>
              </Col>
            </Row>


            <Row>
              <Col xl={12}>
                <Form.Group className="contactInput" controlId="formAffiliation">
                  <Form.Control required type="text" name="affiliation" placeholder="Please tell us your role within Healthcare" />
                </Form.Group>
              </Col>
            </Row>

            {/* <Row>
              <Col xl={12}>
                <Form.Group className="contactInput" controlId="formSuffix">
                  <Form.Select name="products" aria-label="Default select example">
                    <Form.Label>Products</Form.Label>
                    <option>Products</option>
                    <option name="products" value="I'd love to learn more about the Novelle Suction Device!">I'd love to learn more about the Novelle Suction Device!</option>
                    <option name="products" value="I'd love to learn more about the Visibot™">I'd love to learn more about the Visibot™</option>
                    <option name="products" value="other">other</option>

                  </Form.Select>
                </Form.Group>
              </Col>
            </Row> */}

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
