import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import publication1 from "../assets/publications/publication1.pdf"
import publication2 from "../assets/publications/publication2.pdf"

const images = [
    {
        image: publication1,
        title: "Moving camera in human body"
    },
    {
        image: publication2,
        title: "Cameras can flex says me"
    },
]






export default function MyPublications() {

       
    return (
      <Box 
      sx={{ px:2 }}
      >
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item) => (
          <ImageListItem key={item.image}>
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
            title={item.title}
            // subtitle={item.author}
            // actionIcon={
            //   <IconButton
            //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            //     aria-label={`info about ${item.title}`}
            //   >
              
            //   </IconButton>
            // }
          />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    );

}