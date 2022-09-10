import React, { useEffect,useState } from 'react'
import Question from '../component/Question';
import { Spinner,ChakraProvider } from '@chakra-ui/react'

function Quiz({name,questions,setQuestions,score,setScore}) {

  const [options, setOptions] = useState()
  const [currentQuestion, setCurrentQuestion] = useState(0)


  useEffect(() => {
    setOptions(
      questions &&
      shuffle([
          questions[currentQuestion]?.correct_answer?? [],
          ...questions[currentQuestion]?.incorrect_answers?? [],
        ])
    );
  }, [currentQuestion, questions]);

  console.log(questions);
  console.log(options);


  const shuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };




  return (
    <ChakraProvider>
    <div className="quiz">
    <span className="subtitle">Welcome, {name}</span>

    {questions ? (
      <>
        <div className="quizInfo">
          <span>{questions[currentQuestion]?.category?? []}</span>
          <span>
            Score : {score}
          </span>
        </div>
        <Question
         currentQuestion={currentQuestion}
         setCurrentQuestion={setCurrentQuestion}
         questions={questions}
         options={options}
         correct={questions[currentQuestion]?.correct_answer}
         score={score}
         setScore={setScore}
         setQuestions={setQuestions}
        />
        </>
      ) : (
        <Spinner size='xl'
          style={{ margin: 100 }}
        />
      )}
    </div>
    </ChakraProvider>

  );
};
export default Quiz;
