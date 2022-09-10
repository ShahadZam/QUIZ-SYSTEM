import { useEffect } from 'react'
import { Button,ChakraProvider} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'



const Result = ({ name, score }) => {
  const navigate= useNavigate()

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <ChakraProvider>
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
      colorScheme='teal'
      size='lg'
      variant='solid'
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={()=>{ navigate("/");}}
      >
        Go to home
      </Button>
    </div>
    </ChakraProvider>
  );
};

export default Result;