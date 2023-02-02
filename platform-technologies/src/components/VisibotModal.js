import React from "react";
import '../assets/css/Home.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import IoMdCloseOutline from '@react-icons/all-files/io/IoMdCloseCircleOutline'
import BiLoaderAlt from '@react-icons/all-files/bi/BiLoaderAlt'
import '../assets/css/VisibotModal.css'
import visibotVid from '../assets/videos/visibotVid.mp4'

export default function VisibotModal() {


  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <>
      
      <button onClick={openModal} className="modalButton">
          Watch the Video!
          {modal ? (
            <section className="modal__bg">
              <div className="modal__align">
                <div className="modal__content" modal={modal}>
                  {/* <IoMdCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                  <div className="modal__video-align">
                    {videoLoading ? (
                      <div className="modal__spinner">
                        {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                      </div>
                    ) : null}
                    <iframe 
                    width="1232" 
                    height="620" 
                    src="https://www.youtube.com/embed/mUJuoFKmNrc" 
                    title="The Novell Suction full ND" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </section>
          ) : null}
        </button>
     
    </>
  )
}
