import Box from "@mui/material/Box"
import { Container } from "@mui/system"
import React from 'react'
import administrator from '../assets/images/Administrator.jpg'
import surgeon from '../assets/images/surgeon.jpeg'
import team from '../assets/images/team.jpg'
import patient from '../assets/images/patient.jpg'


export default function Technology() {
    return (
        <>
        <Container>
            <Box>
               <h1>Technology</h1> 
               
            </Box>
        </Container>

        <Container>
            <Box>
               <h1>Visibot™</h1> 
                <h4>
                    Visibot™ is a disposable, miniaturized, fully insertable module with automated pan and tilt functionality to replace the satandard camera, laprascope and lightsource. This provides a less invasive option for patients, superior visualization, decreased surgical footprint and increased efficiencies for all stakeholders.
                </h4>
            </Box>
            <Box>
                <img className="techSurgeon" src={surgeon} alt="surgeon"></img>
                <h3>Surgeons</h3>
                <ul>
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
                </ul>
            </Box>
            <Box>
                <img className="techTeam" src={team}></img>
                <h3>Surgical Staff</h3>
                <ul>
                    <li>No camera holder required</li>
                        <p>FTE can be repurposed</p>
                    <li>Saves time and money</li>
                        <p>Simple equipment setup/tear down</p>
                        <p>Single componant/disposable</p>
                        <p>No reprocessing</p>
                        <p>1 less incision and trocar</p>
                </ul>
            </Box>
            <Box>
                <img className="techAdmin" src={administrator}></img>
                <h3>Administration</h3>
                <ul>
                    <li>Reduce staffing requirement</li>
                        <p>1 less FTE/Laproscope</p>
                    <li>Cost savings per procedure</li>
                        <p>Reduced procedure time, OR time, supplies, capital equipment and service contracts</p>
                    <li>Decreased risk to patient</li>
                        <p>1 less incision</p>
                        <p>No reprocessed devices</p>
                </ul>
            </Box>
            <Box>
                <img className="techPatient" src={patient}></img>
                <h3>Patients</h3>
                <ul>
                    <li>Less invasive option</li>
                    <li>Less infection risk</li>
                    <li>One less incision</li>
                    <li>Better visualization of pathology</li>
                </ul>
            </Box>
            <Box>
                <h4>Visibot™ has not been submitted for regulatory approval and therefore is not yet available for commercial sale or clinical use</h4>
            </Box>
        </Container>

        <Container>
            <Box>
               <h1>Technology</h1> 
            </Box>
        </Container>
        </>
    )
}

