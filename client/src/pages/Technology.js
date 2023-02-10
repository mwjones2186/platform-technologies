import '../assets/css/Technology.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import visibot from '../assets/images/VISIBOT.png'
import React from 'react'
import administrator from '../assets/images/Administrator.jpg'
import surgeon from '../assets/images/surgeon.jpeg'
import team from '../assets/images/team.jpg'
import patient from '../assets/images/patient.jpg'
import { ListGroupItem } from 'react-bootstrap';
import fifthArm1 from '../assets/images/fifthArm1.webp'
import fifthArm2 from '../assets/images/fifthArm2.webp'
import robot from '../assets/images/robot.webp'
import challenge from '../assets/images/challengeSurgery.jpg'
import VisibotModal from '../components/VisibotModal';


export default function Technology() {
    return (
        <>
            <div className="header">
                <h1>Novell Curved Suction Irrigation Tip</h1>
            </div>

            <Container className="techContainer">
                <Row className="row">
                    <div>
                        <h4>
                            A novel laparoscopic variable Curved suction irrigation tip
                        </h4>
                    </div>

                    <Col className="box" xl={4} md={6}>
                        <img className="techSurgeon" src={fifthArm2} alt="surgeon"></img>
                        <h3>Universal Multiplanar Suction Irrigation</h3>
                        <ul className="description">
                            <p>The Platform Technologies Surgical Multiplanar Suction improves surgical site visibility, minimizing surgical time by eliminating workarounds necessitated by poor suction/irrigation

                                access.</p>

                        </ul>
                    </Col>
                    <Col className="box" xl={4} md={6}>
                        <img className="techTeam" src={robot}></img>
                        <h3>Current Systems</h3>
                        <ul className="description">

                            <p>Suction/irrigation systems provide straight line access while other workarounds such as sponges or rubber tubes are time consuming. Robotic platforms offer a robotic suction/irrigation arm tool option that is expensive and limits the surgeons' capabilities in active dissection and bleeding control.</p>
                        </ul>
                    </Col>
                    <Col className="box" xl={4} md={6}>
                        <img className="techAdmin" src={challenge}></img>
                        <h3>Challenges</h3>
                        <ul className="description">

                            <p>Patient anatomy can prevent access of suction/irrigation to surgical regions and capitalize interference. With other surgical instruments, patients' organs block visibility and surgical dissection can present difficult orientations. When bleeding occurs, rapid visualization

                                at the bleeding site is critical.</p>
                        </ul>
                    </Col>
                    <Col className="box" xl={4} md={6}>
                        <img className="techPatient" src={fifthArm1}></img>
                        <h3>The Solution</h3>
                        <ul className="description">
                            <p>A Versatile "Sheath" over an existing rigid suction/irrigation shaft. The Patented, full anatomical access movement bends around patient anatomy to consistently eliminate time consuming work arounds while retaining all straight rigid tip function.

                             </p>
                        </ul>
                    </Col>
                    <Col className="bottomTxt" xl={12}>
                        <h4>Watch the Video!</h4>
                    </Col>
                    <VisibotModal />
                </Row>
            </Container>



            <div className="header">
                <h1>Visibot™</h1>
            </div>

            <Container className="techContainer">
                <Row className="row">
                    <div>
                   

                        <h4>
                            Visibot™ is a laparoscopic device with a miniaturized camera and light system that is guided by patented, AI software to autonomously track and follow the surgeons instruments and movements during surgery, through imaging recognition. It is a disposable device that replaces the standard camera, laparoscope and light guide and may also be utilized as a handheld laparoscope utilizing the AI tracking or manual tip deflaction. 
                        </h4>
                    </div>
                    <img className='visibotPicture' src={visibot}></img>


                    <Col className="box" xl={4} md={6}>
                        <img className="techSurgeon" src={surgeon} alt="surgeon"></img>
                        <h3>Surgeons</h3>
                        <ul className="description">
                            <li>Surgeon regains control of image</li>
                            <p>No camera holder required</p>
                            <p>Automated pan/tilt</p>
                            <li>Camera may be positioned anywhere withing the abdomen for optimal viewing</li>
                            <li>No camera for fogging or lens cleaning</li>
                            <p>Distal LED's = No fogging</p>
                            <p>Lens washing feature</p>
                            <li>First use image quality each case</li>
                            <p>Disposable</p>
                            <li>Reduced ports x1</li>
                            <p>Camera port becomes an instrument port</p>
                            <li>Need laparoscopic image with camera holder</li>
                            <p>No camera removal required for lens cleaning</p>
                        </ul>
                    </Col>
                    <Col className="box" xl={4} md={6}>
                        <img className="techTeam" src={team}></img>
                        <h3>Surgical Staff</h3>
                        <ul className="description">
                            <li>No camera holder required</li>
                            <p>FTE can be repurposed</p>
                            <li>Saves time and money</li>
                            <p>Simple equipment setup/tear down</p>
                            <p>Single componant/disposable</p>
                            <p>No reprocessing</p>
                            <p>1 less incision and trocar</p>
                        </ul>
                    </Col>
                    <Col className="box" xl={4} md={6}>
                        <img className="techAdmin" src={administrator}></img>
                        <h3>Administration</h3>
                        <ul className="description">
                            <li>Reduce staffing requirement</li>
                            <p>1 less FTE per lapar</p>
                            <li>Cost savings per procedure</li>
                            <p>Reduced procedure time, OR time, supplies, capital equipment and service contracts</p>
                            <li>Decreased risk to patient</li>
                            <p>1 less incision</p>
                            <p>No reprocessed devices</p>
                        </ul>
                    </Col>
                    <Col className="box" xl={4} md={6}>
                        <img className="techPatient" src={patient}></img>
                        <h3>Patients</h3>
                        <ul className="description">
                            <li>Less invasive option</li>
                            <li>Less infection risk</li>
                            <li>One less incision</li>
                            <li>Better visualization of pathology</li>
                        </ul>
                    </Col>
                    <Col className="bottomTxt" xl={12}>
                        <h4>Visibot™ has not been submitted for regulatory approval and therefore is not yet available for commercial sale or clinical use</h4>
                    </Col>
                </Row>
            </Container>

            {/* <Container>
                <Box>
                    <h1>Technology</h1>
                </Box>
            </Container> */}
        </>
    )
}

