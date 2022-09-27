import {
  Box,
  Button,
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { grey, red } from '@mui/material/colors'
import { Stack } from '@mui/system'
import { useState } from 'react'
import Main from './components/Main'
import { Navbar } from './components/Navbar'
import Questions from './pages/QuestionsPage'

function App() {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: grey[50],
      },
      mode: mode,
      ...(mode === 'light' && {
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }),
    },
  })

  let component
  switch (window.location.pathname) {
    case '/questions':
      component = <Questions />
      break
    default:
      component = <Main />
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Box>
          <Stack>
            {/* <Navbar /> */}
            {component}
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
