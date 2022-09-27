import React from 'react'

function questions() {
  return (
   <container>
    <Box
     sx={{
      m: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
     }}
    >
     <form action="/questions">
      <Box
       sx={{
        backgroundColor: '#F5F7FB',
        borderRadius: 10,
        height: 800,
        width: 1200,
        m: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
       }}
      >
       <Box
        sx={{
         backgroundColor: '#FFFAD1',
         height: 235,
         width: 250,
         borderBottomLeftRadius: '87%',
         borderTopRightRadius: 40,
         position: 'relative',
         bottom: 102,
         left: 475,
        }}
       ></Box>
       <Typography
        variant="h4"
        sx={{
         color: '#293264',
         weight: '700',
        }}
       >
        Quizzical
       </Typography>
       <Button
        variant="contained"
        type="submit"
        sx={{
         backgroundColor: '#4D5B9E',
         width: 200,
         height: 50,
         borderRadius: 5,
         m: 10,
        }}
       >
        Start quiz
       </Button>
       <Box
        sx={{
         backgroundColor: '#DEEBF8',
         height: 110,
         width: 180,
         borderTopRightRadius: '53%',
         position: 'relative',
         top: 101,
         right: 510,
        }}
       ></Box>
      </Box>
     </form>
    </Box>
   </container>
  )
}

export default questions