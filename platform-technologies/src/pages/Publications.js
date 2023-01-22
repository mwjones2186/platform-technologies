import { Container, Card, Col, Button, Row } from "react-bootstrap";
import MyPublications from "../components/MyPublications";
import '../assets/css/Publications.css';

export default function Publications() {
    return (
        <>
            <div>
                <Container>
                    <h1 className="galleryH1">Publications</h1>
                    <h3>Publications report on both the development of the Visibot technology and pre-clinical trials demonstrating proof of concept</h3>
                    <h5>For more information please reach out to us at sjones@platform-imaging.com</h5>

                </Container>
            </div>


            <div id="iframeDiv" className="galleryText">

                <MyPublications />

            </div>

        </>

    )
}