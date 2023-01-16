// import Image from "mui-image"
import Heroimg from "../assets/images/hero image.webp"
import Box from "@mui/material/Box"
import { Container } from "@mui/system"
import React from 'react'
import VisibotVid from "../assets/videos/visibotVid"
import Video from "../assets/videos/visibotVid"

export default function Home() {
    return (
        <>
        <Container>  
            <img className="homeHeroImg"
                src={Heroimg}
                alt="hero image">
                    
            </img>
        </Container>
        <Container>
            <Box>
                <h2>
                    THE FUTURE of Minimally Invasive Surgery
                </h2>
                
            <div>
                <Video/>
            </div>

            </Box>
            <Box>
                <div>
                    <h2>Platform Technologies</h2>
                    <h4>
                        An early-stage medical device company perfecting and commerializingautonomous, disposable, miniaturized visualization devices for minimally invasice surgery (MIS)

                    </h4>
                </div>
            </Box>
        </Container>

        </>
    )
}