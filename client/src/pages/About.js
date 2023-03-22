import '../assets/css/About.css';
import React from 'react'
import HeadShot1 from '../assets/images/sjHeadshot.webp'
import HeadShot2 from '../assets/images/unnamed.png'
import HeadShot3 from '../assets/images/unnamed (1).png'

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
                        <h2>Who We Are</h2>
                    </Col>
                </Row>

                <Row className='row2'>
                    <Col className='text' xl={7} sm={12}>
                        <p className='par1'>
                            Platform Innovations is identifying pain points in minimally invasive surgery (MIS) and locating and developing product solutions to help provide superior outcomes for the surgeon, patient and healthcare facility.
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
                            Certain devices and techniques for laparoscopic procedures have not changed in 40 years. As dedicated and focused innovators, it is our responsibility to develop devices that are less invasive to the patient, drive better outcomes for the surgeon while lowering or maintaining costs for the healthcare facility.
                        </p>
                    </Col>
                </Row>


                <Col className='text' xl={12} sm={12}>
                    <p className='par3'>
                        We invite you to learn more about Platform Innovations and our commitment to improving outcomes in minimally invasive surgery.
                    </p>
                </Col>





                <div className='teamTxt'>
                    <h2>Meet Our Team</h2>
                    <p>
                        Each member of the team has extensive, relevent experience in the varius aspects of medical technology development and commercialization. It is this collective expertise that provides strong leadership for Platform Innovations. Among the members of the management team, there is overlapping ability to identify current issues, develop or locate subsequent solutions, manage intellectual property, regulatory approval and the successful commercialization process.
                    </p>
                </div>


                <Row className='allMembersDiv'>
                    <Col xl={3} className='teamMember'>
                        <img
                            src={HeadShot1}
                            alt="Steve Jones">
                        </img>
                        <h4>Steve Jones</h4>
                        <div className='hiddenDiv visibleDiv' id='member1'>
                            <h5>President and CEO / Chief Executive Officer</h5>
                            <ul className='memberUl'>
                                <h6>24+ Years Medical Device Experieince:</h6>

                                <li>Board Member</li>
                                <li>VP Arthrex California Technology (Surgical Camera Division)</li>
                                <li>Sr Director Business Development Arthrex Inc</li>
                                <li>VP Global Marketing ConMed Linvatec</li>
                                <li>Director Distributor Sales ConMed Linvatec</li>
                                <li>Clinical PA</li>
                            </ul>
                        </div>
                        <button id='memberBtn1' onClick={() => {
                            const member1 = document.querySelector('#member1');
                            member1.classList.toggle('hiddenDiv');

                            const memberBtn1 = document.querySelector('#memberBtn1');


                            if (memberBtn1.innerText === 'Click To Learn More!') {
                                memberBtn1.innerText = 'Click to hide info'
                            } else {
                                memberBtn1.innerText = 'Click To Learn More!'
                            }
                        }}>Click To Learn More!</button>
                    </Col>

                    <Col xl={3} className='teamMember'>
                        <img
                            src={HeadShot2}
                            alt="RAYMOND RACKLEY,BME M.D.">
                        </img>
                        <h4>Raymond Rackley, BME M.D</h4>

                        <div className='hiddenDiv visibleDiv' id='member2'>
                            <h5>Advisory Board Chair</h5>
                            <ul className='memberUl'>
                                <li>Professor of Surgery at Cleveland
                                    Clinic's Glickman Urology Center for
                                    Pelvic Medicine and Reconstructive
                                    Surgery</li>
                                <li>General Managing Partner Nirvana
                                    Healthcare Ventures</li>
                                <li>MD from Case Western Reserve
                                    University Medical School and his BS in
                                    Biomedical Engineering from Duke
                                    Engineering.</li>
                            </ul>
                        </div>
                        <button id='memberBtn2' onClick={() => {
                            const member2 = document.querySelector('#member2');
                            member2.classList.toggle('hiddenDiv');

                            const memberBtn2 = document.querySelector('#memberBtn2');
                            if (memberBtn2.innerText === 'Click To Learn More!') {
                                memberBtn2.innerText = 'Click to hide info'
                            } else {
                                memberBtn2.innerText = 'Click To Learn More!'
                            }
                        }}>Click To Learn More!</button>
                    </Col>

                    <Col xl={3} md={6} className='teamMember'>
                        <img
                            src={HeadShot3}
                            alt="Ethan Rigel">
                        </img>
                        <h4>Ethan Rigel</h4>

                        <div className='hiddenDiv visibleDiv' id='member3'>
                            <h5>Board Member</h5>
                            <ul className='memberUl'>
                                <li>Founding and Managing Partner of Gore Range Capital</li>
                                <li>invested $900+ million in companies with a combined enterprise value $2B+</li>
                                <li>Massachusetts Institute of Technology (Bachelor of Science in Economics and Bachelor of Science in Management Science)</li>
                                <li>MBA from the Fuqua School of Business at Duke University.</li>
                            </ul>
                        </div>
                        <button id='memberBtn3' onClick={() => {
                            const member3 = document.querySelector('#member3');
                            member3.classList.toggle('hiddenDiv');

                            const memberBtn3 = document.querySelector('#memberBtn3');
                            if (memberBtn3.innerText === 'Click To Learn More!') {
                                memberBtn3.innerText = 'Click to hide info'
                            } else {
                                memberBtn3.innerText = 'Click To Learn More!'
                            }
                        }}>Click To Learn More!</button>
                    </Col>

                    {/* <Col xl={3} className='teamMember'>
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
                    </Col> */}

                </Row>
            </Container>
        </>
    )
}