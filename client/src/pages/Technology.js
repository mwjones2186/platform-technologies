import '../assets/css/Technology.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import visibot from '../assets/images/VISIBOT.png'
import React, { useRef, useEffect } from 'react'
import administrator from '../assets/images/Administrator.jpg'
import surgeon from '../assets/images/lapSurg.jpeg'
import team from '../assets/images/team.jpg'
import patient from '../assets/images/patient.jpg'
import fifthArm1 from '../assets/images/fifthArm1.webp'
import fifthArm2 from '../assets/images/fifthArm2.webp'
import robot from '../assets/images/robot.webp'
import challenge from '../assets/images/challengeSurgery.jpg'
import VisibotModal from '../components/VisibotModal';
import heroImg from '../assets/images/hero image.webp'
import robotDoc from '../assets/images/RobotDoc.webp'


export default function Technology() {

    const textRef = useRef(null);

    // change text for slideshow here
    const techSlideObj = {
        txt1: 'text 1 text text text text text 1 text text text text',
        txt2: 'text 2 text text text text text 2 text text text text text 2 text text text text text 2 text text text text',
        txt3: 'text 3 text text text text text 3 text text text texttext 3 text text text text text 3 text text text text text 3 text text text text text 3 text text text text',
        txt4: 'text 4 text text',
        txt5: 'text 5 text text text text text 5 text text text text text 5 text text text text text 5 text text text text text 5 text text text text text 5 text text text text text 5 text text text text text 5 text text text text text 5 text text text text',
    }

    // function ChangeTxt({ techSlideObj }) {
    //     let index = 0;
    //     useEffect(() => {
    //         const intervalId = setInterval(() => {
    //             const keys = Object.keys(techSlideObj);
    //             const key = keys[index % keys.length];
    //             textRef.current.innerText = techSlideObj[key];
    //             index++;
    //             // if you want to change interval at which text changes, change number below
    //         }, 5000);

    //         return () => clearInterval(intervalId);
    //     }, [techSlideObj]);
    // }
    // ChangeTxt({techSlideObj})

    return (
        <>
            <div className="header">
                <h1>Novell Adjustable Curved Suction Irrigation Tip</h1>
            </div>

            <Container className="techContainer">
                <Row className="row">
                    {/* <div>
                        <h4>
                            A novel laparoscopic variable Curved suction irrigation tip
                        </h4>
                    </div> */}

                    <Col className="box" xl={4} md={6}>
                        <img className="techAdmin" src={challenge}></img>
                        <h3>Challenges</h3>
                        <ul className="description">

                            <p>Patient anatomy and multiple surgical instrumentation can prevent direct visualization and access of suction/irrigation creating difficult orientations for dissection. When bleeding occurs, accurate suction/irrigation at the site is critical.</p>
                        </ul>
                    </Col>

                    <Col className="box" xl={4} md={6}>
                        <img className="techTeam" src={robotDoc}></img>
                        <h3>Current Systems</h3>
                        <ul className="description">

                            <p>Suction/irrigation systems provide straight line access while other workarounds such as sponges or rubber tubes are time consuming. Robotic platforms offer a robotic suction/irrigation arm tool option that is expensive and limits the surgeons' capabilities in active dissection and bleeding control.</p>
                        </ul>
                    </Col>

                    <Col className="box" xl={4} md={6}>
                        <img className="techPatient" src={fifthArm1}></img>
                        <h3>The Solution</h3>
                        <ul className="description">
                            <p>A versitile sheath over an existing rigid suction/irrigation shaft. The Patented, full anatomical access movement bends around patient anatomy and instrumentation to consistently eliminate time consuming work arounds while retaining all straight rigid tip function.

                            </p>
                        </ul>
                    </Col>

                    <Col className="box" xl={4} md={6}>
                        <img className="techSurgeon" src={fifthArm2} alt="surgeon"></img>
                        <h3>Universal Multiplanar Suction Irrigation</h3>
                        <ul className="description">
                            <p>The Platform Innovations surgical multiplanar suction improves surgical site visibility, minimizing surgical time by eliminating workarounds necessitated by poor suction/irrigation

                                access.</p>

                        </ul>
                    </Col>

                    <Col className="bottomTxt" xl={12}>
                        <h4>Click button below to watch a video containing the Novell Suction!</h4>
                    </Col>
                    <VisibotModal />
                </Row>
            </Container>

            <Container className='techSlideCont'>
                <img className='techSlideImg' src={heroImg} alt='person doing stuff'></img>
                {/* <span ref={textRef} id='techSlideTxt' className='techSlideTxt'>this text will never repeat!!!!!</span> */}
            </Container> 



            <div className="header">
                <h1>Visibot™</h1>
            </div>

            <Container className="techContainer">
                <Row className="row">
                    <div>
                        <h4>
                            Visibot™ is an insertable laparoscopic device with a miniaturized camera and light system that is guided by patented, AI software to autonomously track and follow the surgeons instruments and movements during surgery, through imaging recognition. It is a disposable device that replaces the standard camera, laparoscope and light guide and may also be utilized as a handheld laparoscope utilizing the AI tracking or manual tip deflaction.
                        </h4>
                    </div>
                    <img className='visibotPicture' src={visibot}></img>

                    
                    <Col className="box" xl={3} md={6}>
                        <img className="techAdmin" src={administrator}></img>
                        <h3>Administration</h3>
                        <ul className="description">
                            <li>No Surgical Assistant required to hold the camera</li>
                            <p>This FTE can be repurposed</p>
                            <br></br>
                            <li>No reprocessing time or expense</li>
                            <br></br>
                            <li>Fixed operational budget cost</li>
                            <br></br>
                            <li>Decreases capital equipment and service contract requirements</li>
                        </ul>
                    </Col>
                    <Col className="box" xl={3} md={6}>
                        
                        <img className="techSurgeon" src={surgeon} alt="surgeon"></img>
                        <h3>Surgeons</h3>
                        <ul className="description">
                            <li>Surgeon regains control of image</li>
                            <p>No Surgical Assistant required to hold the camera</p>
                            <br></br>
                            <li>Camera may be positioned and tethered within the abdomen</li>
                            <p>AI or manual control of pan and tilt</p>
                            <br></br>
                            <li>Reduction of 1 working port</li>
                            <p>If tethered, camera port becomes free working port</p>
                            <br></br>
                            <li>No camera fogging or removal for lens cleaning</li>
                            <p>LED's and built in lens wash system</p>
                            <br></br>
                            <li>First use image quality every procedure</li>
                            <p>Disposable/single use</p>
                            
                        </ul>
                    </Col>
                   
                    <Col className="box" xl={3} md={6}>
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
              
                    {/* <Col className="box" xl={4} md={6}>
                        <img className="techPatient" src={patient}></img>
                        <h3>Patients</h3>
                        <ul className="description">
                            <li>Less invasive option</li>
                            <br></br>
                            <li>Less infection risk</li>
                            <br></br>
                            <li>One less incision</li>
                            <br></br>
                            <li>Single use for optimal visualization</li>
                        </ul>
                    </Col> */}
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

