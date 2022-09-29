import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import ButtonComponent from '../components/Button'
function Question(props) {

    const [isClicked, setIsClicked] = useState([
       { id: 0, isClicked: false},
       { id: 1, isClicked: false},
       { id: 2, isClicked: false},
       { id: 3, isClicked: false}
    ])

    function handleClick(id) {
       
        // setIsClicked((prevState) =>
        //     prevState.map((button) => {
        //         return button.id === id ? { ...button, isClicked: !button.isClicked } : button
        //     }),
        // )
        setIsClicked(current =>
            current.map(obj => {
                if (obj.id !== id) {
                    return { ...obj, isClicked: false };
                } else {
                    return { ...obj, isClicked: true };
                }

                
            }),
        );
       
       
        console.log(`button with id ${id} was clicked`)
        console.log(isClicked)
        
       
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

              <ButtonComponent 
              id={0}
              handleClick={handleClick}
              answer={props.correctAnswer}
              wasClicked={isClicked[0].isClicked && 'red'}
              />
             
              <ButtonComponent
                  id={1}
                  handleClick={handleClick}
                  answer={props.wrongAnswer[0]}
                  wasClicked={isClicked[1].isClicked && 'red'}
              />
             
              <ButtonComponent
                  id={2}
                  handleClick={handleClick}
                  answer={props.wrongAnswer[1]}
                  wasClicked={isClicked[2].isClicked && 'red'}
              />
              
              <ButtonComponent
                  id={3}
                  handleClick={handleClick}
                  answer={props.wrongAnswer[2]}
                  wasClicked={isClicked[3].isClicked && 'red'}
              />
           
            
            
            
    </Box>
   </Box>
     
  )
}

export default Question