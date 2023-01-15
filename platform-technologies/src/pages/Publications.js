import { Container, Card, Col, Button, Row } from "react-bootstrap";
import MyPublications from "../components/MyPublications";


export default function Publications() {
    return (
        <>
             <div>
            <Container>
            <h1 className="galleryH1">Publications</h1> 
               
            </Container>
        </div>
        <div className="galleryText">
            <MyPublications />
        </div>
        
        </>

    )
}