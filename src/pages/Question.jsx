import { BorderBottom, Margin } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Question() {
  return (
   
   <Box 
   sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #DBDEF0',
    marginBottom: 2,
   }}>
    <Typography
     variant="h3"
     sx={{
      color: '#293264',
      weight: '700',
      margin: 2,
     }}
     >
     Question 1
    </Typography>
    <Box
     
    >
     <Button
      variant="outlined"
      type="submit"
      size='medium'
      sx={{
       fontSize: 15,
       width: 250,
       height: 50,
       color: '#293264',
       backgroundColor: '#D6DBF5',
       borderRadius: 5,
       borderColor: 'transparent',
       margin: 3,
       '&:hover': {

        borderColor: '#D6DBF5'
       },
      }}
      >
      Answer 1
     </Button>
      <Button
      
       variant="outlined"
       type="submit"
       size='medium'
       sx={{
        fontSize: 15,
        width: 250,
        height: 50,
        color: '#293264',
        borderRadius: 5,
        borderColor: '#293264',
        margin: 3,
        '&:hover': {
         backgroundColor: 'rgba(214, 219, 245, 0.4)',
         
         borderColor: '#293264'
        },
       }}
      >
       Answer 2
      </Button>
      <Button
       variant="outlined"
       type="submit"
       size='medium'
       sx={{
        fontSize: 15,
        width: 250,
        height: 50,
        color: '#293264',
        borderRadius: 5,
        borderColor: '#293264',
        margin: 3,
        '&:hover': {
         backgroundColor: 'rgba(214, 219, 245, 0.4)',

         borderColor: '#293264'
        },
       }}
      >
       Answer 3
      </Button>
      <Button
       variant="outlined"
       type="submit"
       size='medium'
       sx={{
        fontSize: 15,
        width: 250,
        height: 50,
        color: '#293264',
        borderRadius: 5,
        borderColor: '#293264',
        margin: 3,
        '&:hover': {
         backgroundColor: 'rgba(214, 219, 245, 0.4)',
         borderColor: '#293264'
        },
       }}
      >
       Answer 4
      </Button>
    </Box>
   </Box>
     
  )
}

export default Question