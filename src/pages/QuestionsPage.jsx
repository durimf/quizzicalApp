import { Box, Button, Container, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Question from './Question'
import axios from 'axios'

function QuestionsPages() {

  const [data, setData] = useState()
  const [checkAnswersIsClicked, setCheckAnswersIsClicked] = useState(false);
  const [playAgain, setPlayAgain] = useState(false)
  const url = 'https://opentdb.com/api.php?amount=5&type=multiple'

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.results))
      
  }, [playAgain])

 
  let question
  if(data) {
      question = data.map((result,index) => {
        return <Question question={result.question} correctAnswer={result.correct_answer}
          wrongAnswer={result.incorrect_answers} key={index} checkAnswersIsClicked={checkAnswersIsClicked} data={data} />
      })
  }

  const handleCheckResults = () => { 
    setCheckAnswersIsClicked(prevState => !prevState)
  } 

  const HandleplayAgain = () => {
    setPlayAgain(playAgain => !playAgain)
    handleCheckResults()
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
        {
                  !checkAnswersIsClicked ?
          <Button
          onClick={handleCheckResults}
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
        Check Results
       </Button> :
                    <Button
                      onClick={HandleplayAgain}
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
                     Play Again
                    </Button>
        }
         </Box>
      
      </Box>
     </form>
    </Box>
      </Stack>
   </Container>
  )
}

export default QuestionsPages