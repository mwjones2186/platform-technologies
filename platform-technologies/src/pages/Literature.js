import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Button from "react-bootstrap/Button"


export default function Literature() {
    return (
        <>
            <Container>
                <Box>
                    <Button className="publications"href="/publications" >Scientific Papers and Publications</Button>
                </Box>
             </Container>
            <Container>
                <Box>
                    <Button className="patents" href="/patents">Patents</Button>
                </Box>
            </Container>
            <Container>
                <Box>
                    <Button className="news" href="/news">News</Button>
                </Box>
            </Container>


        </>
    )
}