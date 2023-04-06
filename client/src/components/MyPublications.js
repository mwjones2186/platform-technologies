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
import publicationSuction1 from '../assets/publications/publicationSuction1,pdf.pdf'
import publicationSuction2 from '../assets/publications/publicationSuction2.pdf'




const pdf = [
  {
    id:1,
    image: publicationSuction1,
    title: "An effective adaptation for suction in robotic and laparoscopic pelvic surgery"
  },
  {
    id:2,
    image: publicationSuction2,
    title: "The use of a novel Curved-Tip suction device in Laproscopic and robic Urology surgery"
  },
  {
    id:3,
    image: publication1,
    title: "Insertable Surgical Imaging Device with Pan, Tilt, Zoom, and Lighting"
  },
  {
    id:4,
    image: publication2,
    title: "Insertable Surgical Imaging Device with Pan, Tilt, Zoom, and Lighting"
  },
  {
    id:5,
    image: publication3,
    title: "Insertable Stereoscopic 3D Surgical Imaging Device with Pan and Tilt"
  },
  {
    id:6,
    image: publication4,
    title: "Comparison of Monoscopic Insertable, Remotely Controlled Imaging Device With a Standard Laparoscope in a Porcine Model"
  },
  {
    id:7,
    image: publication5,
    title: "In-Vivo Pan/Tilt Endoscope with Integrated Light Source"
  },
  {
    id:8,
    image: publication6,
    title: "Initial trial of a stereoscopic, insertable, remotely controlled camera for minimal access surgery"
  },
  {
    id:9,
    image: publication7,
    title: "An Online Learning Approach To In-Vivo Tracking Using Synergistic Features"
  },
  {
    id:10,
    image: publication8,
    title: "Learning-Based Configuration Estimation of a Multi-Segment Continuum Robot"
  },
  {
    id:11,
    image: publication9,
    title: "Appearance learning for 3D tracking of robotic surgical tools"
  },

]


export default function MyPublications() {
  const [modal, setModal] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(true);
  const [selectedPublication, setSelectedPublication] = useState(null);

  const openModal = (publication) => {
    setModal(!modal);
    setSelectedPublication(publication);
  };

  const spinner = () => {
    setPdfLoading(!pdfLoading);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedPublication(null);
  }

  const handleClickOutside = (event) => {
    if (event.target.className === "modal__bg") {
      closeModal();
    }
  }

  return (
    <Container sx={{ px: 5 }}>
      <Row className='fullList'>
        {pdf.map((item) => (
          <Col xl={4} className='pubListItem' key={item.image}>
            <h3 className='pdfTxt'>{item.title}</h3>
            <button onClick={() => openModal(item)} className="publicationBtn">
              Open PDF
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
      {modal && selectedPublication && (
        <section className="modal__bg" onClick={handleClickOutside}>
          <div className="modal__align">
          <Button className="modal__close-btn" onClick={closeModal}> 
                Close
              </Button>
            <div className="modal__content" modal={modal}>
              <div className="modal__video-align">
                {pdfLoading ? (
                  <div className="modal__spinner"></div>
                ) : null}
                <iframe
                  className="modal__video-style"
                  onLoad={spinner}
                  loading="lazy"
                  width="800"
                  height="800"
                  src={`${selectedPublication.image}`}
                  title="Publication"
                  frameBorder="10"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
               
              </div>
             
            </div>
          </div>
        </section>
      )}
    </Container>
  );
}