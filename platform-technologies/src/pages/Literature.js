import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button"
import '../assets/css/Literature.css';


export default function Literature() {
    return (
        <>
            <Container>
                <h1 className='literatureH1'>Check out our literature pages!</h1>
                <Row>
                    <Col className='btnContainer' xl={3}>
                        <Button className="literatureBtn" href="/publications" >Scientific Papers and Publications</Button>
                    </Col>

                    <Col className='btnContainer' xl={3}>
                        <Button className="literatureBtn" href="/patents">Patents</Button>
                    </Col>
                    <Col className='btnContainer' xl={3}>
                        <Button className="literatureBtn" href="/news">News</Button>
                    </Col>
                </Row>
            </Container>


        </>
    )
}