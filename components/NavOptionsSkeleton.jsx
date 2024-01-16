import {Container, Skeleton} from "@mui/material";


function NavOptionsSkeleton() {
  return (
    <Container >
      <Skeleton variant="rectangular" width={100} height={100} />
    </Container>
  )
}

export default NavOptionsSkeleton
