import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { styled } from '@mui/material'

// ** Next Imports
import { NextPage } from 'next'

const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  gap: 3
})

const Home: NextPage = () => {
  return (
    <StyledContainer>
      <Typography mt={3} variant='h3' component='h1'>
        PREPTEST FRONTEND TECHNICAL TEST
      </Typography>
    </StyledContainer>
  )
}

export default Home
