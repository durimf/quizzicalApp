import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ButtonComponent from '../components/Button'
function Question(props) {


    const initialState =
        [
            { id: 0, isClicked: false },
            { id: 1, isClicked: false },
            { id: 2, isClicked: false },
            { id: 3, isClicked: false }
        ]

    const [isClicked, setIsClicked] = useState(initialState)
    
    function handleClick(id) {
        setIsClicked(current =>
            current.map(obj => {
                if (obj.id !== id) {
                    return { ...obj, isClicked: false };
                } else {
                    return { ...obj, isClicked: true};
                }
            }),
        );
    }

    useEffect(() => {
        setIsClicked(initialState)
    }, [])

    

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

              <ButtonComponent 
              id={0}
              handleClick={handleClick}
              answer={props.correctAnswer}
              wasClicked={isClicked[0].isClicked}
              checkResults={props.checkAnswersIsClicked}
              correctAnswer={isClicked[0].isClicked}
              />
             
              <ButtonComponent
                  id={1}
                  handleClick={handleClick}
                  answer={props.wrongAnswer[0]}
                  wasClicked={isClicked[1].isClicked}
                  checkResults={props.checkAnswersIsClicked}
                  wrongAnswer={isClicked[1].isClicked}
              />
             
              <ButtonComponent
                  id={2}
                  handleClick={handleClick}
                  answer={props.wrongAnswer[1]}
                  wasClicked={isClicked[2].isClicked }
                  checkResults={props.checkAnswersIsClicked}
                  wrongAnswer={isClicked[2].isClicked}

                  
              />
              
              <ButtonComponent
                  id={3}
                  handleClick={handleClick}
                  answer={props.wrongAnswer[2]}
                  wasClicked={isClicked[3].isClicked}
                  checkResults={props.checkAnswersIsClicked}
                  wrongAnswer={isClicked[3].isClicked}
                  
              />
           
            
            
            
    </Box>
   </Box>
     
  )
}

export default Question