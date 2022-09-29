import React from 'react'
import { Button } from '@mui/material'

function ButtonComponent(props) {

 let answer = props.answer

  return (
   <Button
    onClick={() => props.handleClick(props.id)}
    variant="outlined"
    type="submit"
    size='medium'
    
    sx={{
     backgroundColor: props.wasClicked,
     fontSize: 15,
     width: 250,
     height: 50,
     color: '#293264',
     borderRadius: 5,
     borderColor: '#293264',
     margin: 3,
     '&:hover': {
      backgroundColor: 'rgba(214, 219, 245, 0.4)',
      border: props.handleClick && "none",
      borderColor: '#293264'
     },
    }}
   >
    {answer}
   </Button> 
  )
}

export default ButtonComponent