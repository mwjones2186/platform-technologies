import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React from "react";
// import '../assets/css/Home.css'
import { useState } from "react";
// import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import '../assets/css/Publications.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import publication1 from "../assets/publications/publication1.pdf"
import publication2 from "../assets/publications/publication2.pdf"
import publication3 from '../assets/publications/publication3.pdf'
import publication4 from '../assets/publications/publication4.pdf'
import publication5 from '../assets/publications/publication5.pdf'
import publication6 from '../assets/publications/publication6.pdf'
import publication7 from '../assets/publications/publication7.pdf'
import publication8 from '../assets/publications/publication8.pdf'
import publication9 from '../assets/publications/publication9.pdf'




const pdf = [
  {
    image: publication1,
    title: "Insertable Surgical Imaging Device with Pan, Tilt, Zoom, and Lighting"
  },
  {
    image: publication2,
    title: "Insertable Surgical Imaging Device with Pan, Tilt, Zoom, and Lighting"
  },
  {
    image: publication3,
    title: "Insertable Stereoscopic 3D Surgical Imaging Device with Pan and Tilt"
  },
  {
    image: publication4,
    title: "Comparison of Monoscopic Insertable, Remotely Controlled Imaging Device With a Standard Laparoscope in a Porcine Model"
  },
  {
    image: publication5,
    title: "In-Vivo Pan/Tilt Endoscope with Integrated Light Source"
  },
  {
    image: publication6,
    title: "Initial trial of a stereoscopic, insertable, remotely controlled camera for minimal access surgery"
  },
  {
    image: publication7,
    title: "An Online Learning Approach To In-Vivo Tracking Using Synergistic Features"
  },
  {
    image: publication8,
    title: "Learning-Based Configuration Estimation of a Multi-Segment Continuum Robot"
  },
  {
    image: publication9,
    title: "Appearance learning for 3D tracking of robotic surgical tools"
  },

]


export default function MyPublications() {

  const [modal, setModal] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setPdfLoading(!pdfLoading);
  };


  return (

    <Container
      sx={{ px: 5 }}
    >

      <Row className='fullList'>
        {pdf.map((item) => (

            <Col xl={4}
              className='pubListItem'
              key={item.image}
            >

              <h3 className='pdfTxt'>{item.title}</h3>

              <button
                onClick={openModal}
                className="publicationBtn"
              >
                Open PDF
                {modal ? (


                  <section
                    className="modal__bg">
                    <div className="modal__align">
                      <div className="modal__content" modal={modal}>

                        <div className="modal__video-align">
                          {pdfLoading ? (
                            <div className="modal__spinner">

                            </div>
                          ) : null}
                          <iframe

                            className="modal__video-style"
                            onLoad={spinner}
                            loading="lazy"
                            width="800"
                            height="800"
                            src={`${item.image}`}
                            title="Publication"
                            frameBorder="10"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : null}
              </button>
              <iframe
                hidden="true"
                src={`${item.image}`}
                srcSet={`${item.image}`}
                alt={item.title}
                loading="lazy"
                className='publicationsImg'
              />
            </Col>
        ))}
      </Row>

    </Container>
  );



}