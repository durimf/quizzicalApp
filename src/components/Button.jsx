import React, { useState } from 'react'
import { Button } from '@mui/material'

function ButtonComponent(props) {

  const [answers, setAnswers] = useState([{}])
  


  let answer = props.answer.replace(/[|&;$%@"#<>()+,]/g, "");

  return (
   <Button
    onClick={() => props.handleClick(props.id)}
    variant="outlined"
    type="submit"
    size='medium'
    disabled={props.checkResults}
     // a === true ? a : b === true ? b : c
      sx={[
         {
            margin: 3,
            fontSize: 15,
            width: 250,
            height: 50,
            color: '#293264',
            borderRadius: 5,
            borderColor: '#293264',
          '&:hover': {
            opacity: 0.8,
            borderColor: '#293264',
            backgroundColor: '#D6DBF5',
          },
         },
          props.wasClicked && {
          backgroundColor: '#D6DBF5',
          border: 'none',
          '&:hover': {
            backgroundColor: '#D6DBF5',
            border: "none",
            borderColor: 'none'
          },
          },
          props.checkResults &&
          props.id === 0 &&{
            backgroundColor: '#94D7A2'
          },
          props.checkResults &&
          props.wrongAnswer &&
          {
            backgroundColor: '#F8BCBC'
          },

  ]}
    
   >
    {answer}
   </Button> 
  )
}

export default ButtonComponent