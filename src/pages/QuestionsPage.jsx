import { Box, Button, Container, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Question from './Question'
import axios from 'axios'

function QuestionsPages() {

  const [data, setData] = useState()
  const [questions, setQuestions] = useState([]);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const url = 'https://opentdb.com/api.php?amount=5&type=multiple'

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.results))
  }, [])


  let question
  if(data) {
        
      question = data.map((result,index) => {

        return <Question question={result.question} correctAnswer={result.correct_answer}
          wrongAnswer={result.incorrect_answers} key={index} checkAnswer={checkAnswer}/>
        

        
      })
    
  }

  const handleCheckAnswers = () => {
    setCheckAnswer(true)
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
              {question}
       <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginTop: 5,
       }}>
       <Button
        onClick={() => handleCheckAnswers()}
        variant="contained"
        type="submit"
        sx={{
          backgroundColor: '#4D5B9E',
          fontSize: 25,
          width: 400,
          height: 50,
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
      
      </Box>
     </form>
    </Box>
      </Stack>
   </Container>
  )
}

export default QuestionsPages