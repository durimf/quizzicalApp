import { Box, Button, Container, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Question from './Question'
import axios from 'axios'

function QuestionsPages() {

  const [data, setData] = useState()
  const [questions, setQuestions] = useState([]);
  const url = 'https://opentdb.com/api.php?amount=5&type=multiple'

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.results))
  }, [url])


  let question
  if(data) {
      

      question = data.map((question,index) => {
       
        return <Question question={question.question} correctAnswer={question.correct_answer} incorrectAnswers={question.incorrect_answers}/>

        
      })
    
  }




  return (
   <Container>
    <Stack>
    <Box
     sx={{
      m: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
     
     }}
    >
     <form action="#">
      <Box
       sx={{
        backgroundColor: '#F5F7FB',
        // backgroundColor: 'red',
        borderRadius: 10,
        height: '80vh',
        width: '70vw',
        display: 'flex',
        margin: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
       }}
      >
      <Box
      sx={{
        backgroundColor: '#FFFAD1',
        height: 400,
        width: 350,
        borderBottomLeftRadius: '75%',
        borderTopRightRadius: 30,
        position: 'absolute',
        top: '10.4%',
        right: '14.8%',
        }}
     >
      
     </Box>
              {question}
       <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginTop: 10,
       }}>
       <Button
        variant="contained"
        type="submit"
        sx={{
          backgroundColor: '#4D5B9E',
          fontSize: 25,
          width: 400,
          height: 60,
          color: '#F5F7FB',
          borderRadius: 5,
          '&:hover': {
            opacity: 0.9,
            backgroundColor: '#4D5B9E',
          },
        }}
        >
        Check answers
       </Button>
         </Box>
       <Box
        sx={{
         backgroundColor: '#DEEBF8',
         height: 240,
         width: 650,
         borderTopRightRadius: '73%',
         borderBottomLeftRadius: 30,
         position: 'absolute',
         bottom: '9.5%',
         left: '14.7%',
        }}
       ></Box>
      </Box>
     </form>
    </Box>
      </Stack>
   </Container>
  )
}

export default QuestionsPages