import { BorderBottom, Margin } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Question(props) {

   let random = Math.floor(Math.random() * 3)
    

  


    const buttonsArray = 
        [
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
                {props.correctAnswer}
            </Button>,

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
                {props.incorrectAnswers[2].replace(/[|&;$%@"<>()+,]/g, "")}
            </Button>,

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
                {props.incorrectAnswers[0].replace(/[|&;$%@"<>()+,#]/g, "")}
            </Button>,

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
                {props.incorrectAnswers[1].replace(/[|&;$%@"<>()+,]/g, "")}
            </Button>
        ]


                       
        
    

    
  


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
     variant="h4"
     sx={{
      color: '#293264',
      weight: '700',
      margin: 2,
     }}
     >
              {props.question.replace(/[|&;$%@"<>()+,]/g, "")}
    </Typography>
    <Box
     
    >
    
              
                    
                   

              {
                  buttonsArray.map(button => {
                    button[random]
                  })
              }
            
                        
                    

                                    
                
                
              
             
     
    </Box>
   </Box>
     
  )
}

export default Question