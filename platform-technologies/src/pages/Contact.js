<<<<<<< HEAD
 
=======
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/Contact.css';

export default function Contact() {
    return (
        <>
            <Container>
                <Row className='contanier contact-page'>

                    <Col className='rightText' xl={6} lg={6} sm={12}>
                        <div>
                            <h1>How Can We Help?</h1>
                            <p>Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below</p>
                        </div>
                    </Col>

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
