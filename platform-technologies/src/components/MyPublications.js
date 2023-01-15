import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

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
  
    return (

      <Box 
      sx={{ px:3 }}
      >
      <ImageList variant="masonry" cols={3} gap={8}>
        {pdf.map((item) => (
          <ImageListItem key={item.image}>
            <iframe 
            
              src={`${item.image}`}
              srcSet={`${item.image}`}
              alt={item.title}
              loading="lazy"
            />
            
            <ImageListItemBar
            title={item.title}
            />

          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    );

    

}