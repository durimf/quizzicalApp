import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

function Main() {
  return (
    <container>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <form action="/questions">
          <Box
            sx={{
              backgroundColor: '#F5F7FB',
              // backgroundColor: 'red',
              height: '80vh',
              width: '70vw',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 20,
            }}
          >
            <Box
              sx={{
                backgroundColor: '#FFFAD1',
                height: 300,
                width: 250,
                borderBottomLeftRadius: '100%',
                borderTopRightRadius: 30,
                position: 'relative',
                bottom: '15.2%',
                left: '44.4%',
              }}
            ></Box>
            <Typography
              variant="h2"
              sx={{
                color: '#293264',
                weight: '700',
              }}
            >
              Quizzical
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#293264',
                weight: '300',
                margin: 2,
              }}
            >
              Play and find the right answers
            </Typography>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: '#4D5B9E',
                fontSize: 30,
                width: 700,
                height: 80,
                borderRadius: 5,
                m: 5,
                color: '#F5F7FB',
                '&:hover': {
                  opacity: 0.9,
                  backgroundColor: '#4D5B9E',
                },
              }}
            >
              Start quiz
            </Button>
            <Box
              sx={{
                backgroundColor: '#DEEBF8',
                height: 300,
                width: 250,
                borderTopRightRadius: '53%',
                borderBottomLeftRadius: 30,
                position: 'relative',
                top: '15.2%',
                right: '44.4%',
              }}
            ></Box>
          </Box>
        </form>
      </Box>
    </container>
  )
}

export default Main
