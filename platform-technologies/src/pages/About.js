import '../assets/css/About.css';
import React from 'react'
import HeadShot1 from '../assets/images/sjHeadshot.webp'
import HeadShot2 from '../assets/images/pfHeadshot.webp'
import HeadShot3 from '../assets/images/fbHeadshot.webp'
import HeadShot4 from '../assets/images/dfHeadshot.webp'

import stockImg from '../assets/images/istockphoto-1401699334-170667a.jpg';
import stockImg2 from '../assets/images/istockphoto-1342154721-170667a.jpg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function About() {
    return (
        <>
            <Container>
                <Row className='row1'>
                    <Col className='mainSec' xl={4} sm={12}>
                        <h4>WHO WE ARE</h4>
                        <h2>What We Do</h2>
                    </Col>
                </Row>

                <Row className='row2'>
                    <Col className='text' xl={7} sm={12}>
                        <p className='par1'>
                            Platform Imaging is an early-stage medical device company perfecting and commercializing disposable, miniaturized, autonomous, visualization devices for minimally invasive surgery (MIS) to enhance visualization, decrease the surgical footprint and restore complete autonomy and control of the camera to the surgeon.
                        </p>
                    </Col>
                    <Col className='imgCont' xl={5} sm={12}>
                        <img className='stockImg' src={stockImg}></img>
                    </Col>
                </Row>

                <Row className='row3'>
                    <Col className='imgCont bottomImg' xl={5} sm={12}>
                        <img className='stockImg' src={stockImg2}></img>
                    </Col>
                    <Col className='text' xl={7} sm={12}>
                        <p className='par2'>
                            Devices and techniques for routine laparoscopic procedures have not changed in nearly 40 years. As responsible innovators, it is our responsibility to develop devices that are less invasive to the patient, achieve better outcomes for the surgeon while lowering costs for healthcare facilities.
                        </p>
                    </Col>
                </Row>


                <Col className='text' xl={12} sm={12}>
                    <p className='par3'>
                        We invite you to learn more about Platform Imaging and our commitment to improving outcomes in minimally invasive surgery.
                    </p>
                </Col>





                <div className='teamTxt'>
                    <h2>Meet Our Team</h2>
                    <p>
                        Each member of the team has individual expertise in specific aspects of medical technology development and commercialization, it is the collective expertise that provides strong leadership for Platform Imaging. Among and between members of the management team, there is overlapping expertise in technology development, intellectual property, regulatory approval, and the commercialization process.
                    </p>
                </div>


                <Row className='allMembersDiv'>
                    <Col xl={3} className='teamMember'>
                        <img
                            className="steveJones"
                            src={HeadShot1}
                            alt="Steve Jones">
                        </img>
                        <h4>Steve Jones</h4>
                        <h5>Chief Dork Officer</h5>
                        <ul className='memberUl'>
                            <h6>24+ Years Medical Device Experieince:</h6>

                            <li>VP Arthrex California </li>
                            <li>Technology (Surgical Camera Division)</li>
                            <li>Sr Director Business Development Arthrex Inc</li>
                            <li>VP Global Marketing</li>
                            <li>ConMed Linvatec</li>
                            <li>Director Distributor Sales</li>
                            <li>ConMed Linvatec</li>
                            <li>Clinical PA</li>
                        </ul>
                    </Col>

                    <Col xl={3} className='teamMember'>
                        <img
                            className="dennisFowler"
                            src={HeadShot4}
                            alt="Dennis Fowler">
                        </img>
                        <h4>Dennis Fowler MD MPH</h4>
                        <h5>Co-Founder</h5>
                        <ul className='memberUl'>
                            <li>Exec. VP Titan Medical</li>
                            <li>Professor Surgical Sciences</li>
                            <li>Columbia University</li>
                            <li>VP Medical Director Perioperative Services Presbyterian H​ospital </li>
                            <li>Clinical Surgeon</li>
                        </ul>
                    </Col>

                    <Col xl={3} className='teamMember'>
                        <img
                            className="peterAllen"
                            src={HeadShot2}
                            alt="Peter Allen">
                        </img>
                        <h4>Peter Allen PHD</h4>
                        <h5>Co-Founder</h5>
                        <ul className='memberUl'>

                            <li>Professor Computer Science</li>
                            <li>Director Robotics Laboratory</li>
                            <li>Columbia University</li>
                            <li>Fellowship, Army Research Office</li>
                            <li>Fellowship and Rubinoff Award</li>
                            <li>Presidential Young Investigator</li>
                        </ul>
                    </Col>

                    <Col xl={3} className='teamMember'>
                        <img
                            className="frankDeBernardis"
                            src={HeadShot3}
                            alt="Frank DeBernardis">
                        </img>
                        <h4>Frank DeBernardis</h4>
                        <h5>Co-Founder</h5>
                        <ul className='memberUl'>

                            <li>30+ Years Medical Device experience</li>
                            <li>Bus Dev, Strategic Planning, Sales/Marketing</li>
                            <li>Co-Founder Nascent Enterprises</li>
                            <li>Founder: Numerous start-ups</li>
                            <li>Partner, Gore Range Capital</li>
                        </ul>
                    </Col>

                </Row>
            </Container>
        </>
    )
}