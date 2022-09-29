import { BorderBottom, Margin } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Question(props) {
    
    const [isCorrectAnswerClicked, setIsCorrectAnswerClicked] = useState(false)
    const [isWrongAnswer0Clicked, setIsCorrectAnswer0Clicked] = useState(false)
    const [isWrongAnswer1Clicked, setIsCorrectAnswer1Clicked] = useState(false)
    const [isWrongAnswer2Clicked, setIsCorrectAnswer2Clicked] = useState(false)
    const [isWrongAnswer3Clicked, setIsCorrectAnswer3Clicked] = useState(false)

    const handleCorrectAnswerClick = () => {
        setIsCorrectAnswerClicked(prevState => !prevState)
    }
    const handleisWrongAnswer0Clicked = () => {
        setIsCorrectAnswer0Clicked(prevState => !prevState)
    }
    const handleisWrongAnswer1Clicked = () => {
        setIsCorrectAnswer1Clicked(prevState => !prevState)
    }
    const handleisWrongAnswer2Clicked = () => {
        setIsCorrectAnswer2Clicked(prevState => !prevState)
    }
    const handleisWrongAnswer3Clicked = () => {
        setIsCorrectAnswer3Clicked(prevState => !prevState)
    }
 


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
     variant="h5"
     sx={{
      color: '#293264',
      weight: '700',
      margin: 2,
      
     }}
     >
              {props.question.replace(/[|&;$%@"#<>()+,/]/g, "")}
    </Typography>
    <Box
    >

              <Button
                  onClick={() => handleCorrectAnswerClick()}
                  variant="outlined"
                  type="submit"
                  size='medium'
                  sx={{
                      backgroundColor: isCorrectAnswerClicked ? "#D6DBF5": "none" ,
                      border: isCorrectAnswerClicked && 'none',
                      fontSize: 15,
                      width: 250,
                      height: 50,
                      color: '#293264',
                      borderRadius: 5,
                      borderColor: '#293264',
                      margin: 3,
                      '&:hover': {

                          backgroundColor: isCorrectAnswerClicked ? "#D6DBF5": 'rgba(214, 219, 245, 0.4)',
                          border: isCorrectAnswerClicked && "none",
                          borderColor: isCorrectAnswerClicked ? "none" : '#293264'
                      },
                  }}
              >
                  {props.correctAnswer.replace(/[|&;$%@"quot#<>()+,]/g, "")}
              </Button>,
           

              <Button
                  onClick={() => handleisWrongAnswer0Clicked()}
                  variant="outlined"
                  type="submit"
                  size='medium'
                  sx={{
                      backgroundColor:
                          isWrongAnswer0Clicked ? "#D6DBF5": "none",
                      border: isWrongAnswer0Clicked && 'none',
                      fontSize: 15,
                      width: 250,
                      height: 50,
                      color: '#293264',
                      borderRadius: 5,
                      borderColor: '#293264',
                      margin: 3,
                      '&:hover': {
                          backgroundColor: isWrongAnswer0Clicked ? "#D6DBF5" : 'rgba(214, 219, 245, 0.4)',
                          border: isWrongAnswer0Clicked && "none",
                          borderColor: isWrongAnswer0Clicked ? "none" : '#293264'
                      },
                  }}
              >
                  {props.incorrectAnswers[0].replace(/[|&;$%@"quot#<>()+,]/g, "")}
              </Button>,

              {/* <Button
                  onClick={() => handleClick(props.id)}
                  variant="outlined"
                  type="submit"
                  size='medium'
                  sx={{
                      backgroundColor: isClicked ? "#D6DBF5" : "none",
                      border: isClicked && 'none',
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
                  {props.incorrectAnswers[1].replace(/[|&;$%@"quot#<>()+,]/g, "")}
              </Button>,
           
               <Button
                  onClick={() => handleClick(props.id)}
                 id={props.id}
                 variant="outlined"
                  type="submit"
                   size='medium'
                   sx={{
                       backgroundColor: isClicked ? "#D6DBF5" : "none",
                       border: isClicked && 'none',
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
                  {props.correctAnswer.replace(/[|&;$%@"quot#<>()+,]/g, "")}
               </Button>    */}
            
            
               
              
            
    </Box>
   </Box>
     
  )
}

export default Question