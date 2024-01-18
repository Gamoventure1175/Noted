import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

function loading() {
  return (
    <Container sx={{p:0, m:0, width: "100vw"}}>
        <Box my={2} width={"100%"}>
            <Skeleton variant='rectangular' />
        </Box>
        <Box my={2} width={"100%"}>
            <Skeleton variant='rectangular' width={"100%"}/>
        </Box>
        <Box width={"100%"}>
            <Skeleton variant="rounded" width={"24px"} />
        </Box>
    </Container>
  )
}

export default loading
