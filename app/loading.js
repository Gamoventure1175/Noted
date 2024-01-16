import {auth} from "@clerk/nextjs";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from "@mui/material/Container";

function Loading() {
    const {sessionId} = auth()
    console.log(sessionId)
    const tests = [1,2,3]

    if (sessionId == null) {
        return (
            <Container>
                <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
            </Container>
        )
    }


  return (
    <Grid container spacing={2}>
        {Array.from(tests).map((test) => (
            <Grid item xs={12} sm={6} md={4} key={3}>
                <Card raised sx={{p: 2, width: "100%", height: "100%"}}>
                    <Box sx={{my: 1}}>
                        <Skeleton variant="box" width={"100%"} height={60} />
                    </Box>
                    <Box sx={{my: 1}}>
                    <Skeleton variant="box" width={"100%"} height={20} />
                    </Box>
                    <Divider variant="middle" />
                    <Box sx={{my: 1}}>
                    <Skeleton variant="rectangular" width={"100%"} height={180} />
                    </Box>
                </Card>
            </Grid>
        ))}
  </Grid>
  )
}

export default Loading
