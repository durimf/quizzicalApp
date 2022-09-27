import { Box, Button, Container, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import { Stack } from '@mui/system'
import Main from './components/Main'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <Container>
      <Stack>
        <Navbar />
        <Main />
      </Stack>
    </Container>
  )
}

export default App
