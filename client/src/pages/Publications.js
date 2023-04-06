import { Container } from "react-bootstrap";
import MyPublications from "../components/MyPublications";

import '../assets/css/Publications.css';

export default function Publications() {
    return (
        <>
            <div>
                <Container className="pubMainTxt">
                    <h1>Publications</h1>
                    <h3>Publications report on both the need for a curved suction device and the development of the Visibot™ technology and pre-clinical trials demonstrating proof of concept</h3>
                    <h5>For more information please reach out to us at sjones@platforminnovations.com</h5>
                </Container>
            </div>


            <div id="iframeDiv">

                <MyPublications />

            </div>

        </>

    )
}