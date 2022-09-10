import { Button,ChakraProvider} from '@chakra-ui/react'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'


function Question({
    currentQuestion,
    setCurrentQuestion,
    questions,
    options,
    correct,
    setScore,
    score,
    setQuestions,
  }) {

    const navigate= useNavigate()

    const [selected, setSelected] = useState();
  const [error, setError] = useState(false);


  const handleSelect = (i) => {
    
     if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "true";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleQuit = () => {
    setCurrentQuestion(0);
    setQuestions();
    navigate("/")
  };

  const handleNext = () => {
    if (currentQuestion > 8) {
        navigate("/result");
    } else if (selected) {
        setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else setError(true);
  };

  
  return (
    <ChakraProvider>
    <div className="question">
      <h1>Question {currentQuestion + 1} :</h1>

      <div className='aQuestion'>
      <h2>{questions[currentQuestion]?.question??[]}</h2>
      <div className='options'>
      {error && <div style={{
          width: "100%",
          padding: 10,
          marginBottom: 10,
          borderRadius: 4,
          backgroundColor: "#fd0468",
          textAlign: "center",
          color: "white",
          textTransform: "capitalize",
        }}>You have to choose an answer</div>}
        {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
      </div>

      <div className="controls">

      <Button
          colorScheme='yellow'
           size='md'
          variant='solid'
          style={{ width: 185 }}
          onClick={() => handleQuit()}
          >
            Quit
          </Button>

          <Button
             colorScheme='linkedin'
             size='md'
            variant='solid'
            style={{ width: 185 }}
            onClick={handleNext}
          >
            Next Question
          </Button>



      </div>
      </div>
      </div>
      </ChakraProvider>
  )
}

export default Question