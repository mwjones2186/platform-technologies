// import Image from "mui-image"
import '../assets/css/Home.css';
import Heroimg from "../assets/images/hero image.webp"
import React from 'react'
// import VisibotVid from '../assets/videos/visibotVid.mp4'
import VisibotModal from '../components/VisibotModal';
// import Button from "react-bootstrap/Button"

export default function Home() {
    return (
        <>
            <div className='imgContainer'>
                <img className="homeHeroImg"
                    src={Heroimg}
                    alt="image of 2 doctors">
                </img>

                <div className='mainText'>
                    <h2><span className='futureTxt'>THE FUTURE</span> of Minimally Invasive Surgery</h2>
                    
                    <VisibotModal/>
                </div>


            </div>

            <div>



                <div className='subTxt'>
                    <h2>Platform Technologies</h2>
                    <h4>An early-stage medical device company perfecting and commerializing autonomous, disposable, miniaturized visualization devices for minimally invasice surgery (MIS)</h4>
                </div>

            </div>

        </>
    )
}