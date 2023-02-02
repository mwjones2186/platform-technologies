<<<<<<< HEAD
<<<<<<< HEAD
 
=======
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/Contact.css';
=======
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/Contact.css";
import Form from "react-bootstrap/Form";
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
>>>>>>> 0974c418db205e85ad5c9028d861a6d731c2e516

export default function Contact() {

    const [validated, setValidated] = useState(false);

<<<<<<< HEAD
                    <Col xl={6} lg={6} xs={12} className='text-zone'>
                        <h1>GET IN TOUCH</h1>
                        <div className='contact-form'>
                            <form >
                                <ul>
                                    <li className='half'>
                                        <input type='text' className='name' name='name' placeholder='Name' required />
                                    </li>
                                    <li className='half'>
                                        <input type='email' className='email' name='email' placeholder='Email' required />
                                    </li>
                                    <li>
                                        <input type='text' className='subject' name='subject' placeholder='Subject' required />
                                    </li>
                                    <li>
                                        <textarea placeholder='Message' className='message' name='message' required></textarea>
                                    </li>
                                    <li>
                                        <input type='submit' className='flat-button' value='SEND' />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
>>>>>>> 099d9afa7eedd2b5886436415aa53f1a3157f281
=======
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
          <Col className="rightText" xl={6} lg={6} sm={12}>
            <div>
              <h1>How Can We Help?</h1>
              <p>
                Want to get in touch? Fill out the form and we will get in touch. Let us know how we can help! 
              </p>
            </div>
          </Col>

          <Col xl={6} lg={6} xs={12} className="text-zone">
            <h1>GET IN TOUCH</h1>
            
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                
                  <Form.Group className="mb-3" controlId="formFirstName">
                    {/* <Form.Label>First Name</Form.Label> */}
                    <Form.Control required type="name" placeholder="First Name" />
                    <Form.Text className="text-muted">
                      Please enter your First Name.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formFirstName">
                    {/* <Form.Label>Last Name</Form.Label> */}
                    <Form.Control required type="name" placeholder="Last Name" />
                    <Form.Text className="text-muted">
                      Please enter your Last Name.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formSuffix">
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

                  <Form.Group className="mb-3" controlId="formEmail">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control required type="name" placeholder="Email" />
                    <Form.Text className="text-muted">
                      Please enter your Email.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPhone">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control type="name" placeholder="Contact Number" />
                    <Form.Text className="text-muted">
                      Please enter your phone number.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formAffiliation">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control type="name" placeholder="Please tell us your role within Healthcare" />
                    <Form.Text className="text-muted">
                      Please enter your Affiliation.
                    </Form.Text>
                  </Form.Group>
                  

                  <Form.Group className="mb-3" controlId="formSubject">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control type="name" placeholder="Id love to learn more about your Visibot™!"/>
                    <Form.Text className="text-muted">
                      Please enter a subject.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Control required type="name" placeholder="Enter your message to us!"/>
                    <Form.Text className="text-muted">
                      Please enter a message.
                    </Form.Text>
                  </Form.Group>

                  <Button type="submit">Send</Button>
                  
              </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
>>>>>>> 0974c418db205e85ad5c9028d861a6d731c2e516
