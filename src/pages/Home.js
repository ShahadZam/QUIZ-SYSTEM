import  { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Button,ChakraProvider,Input,Select} from '@chakra-ui/react'




function Home({name,setName,category,setCategory,difficulty,setDifficulty,setQuestions}) {
  const [categoryList, setCategoryList] = useState([]);
 
  const [error, setError] = useState(false)
  const navigate= useNavigate()

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const request = await fetch('https://opentdb.com/api_category.php');
      const data = await request.json();

      const categoriesMap = data.trivia_categories.map((c) => {
        return {
          value: c.id,
          category: c.name,
        };
      });
     

      setCategoryList(categoriesMap);
    };
    fetchCategoriesData();
  }, []);

  const startButton=()=>{
    if(!difficulty||!category||!name){
      setError(true)
      return
    }
    setError(false)
    const fetchQ=async()=>{
    const request = await fetch(`https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
    const data = await request.json();
    

  
    setQuestions(data.results);
  



  }
  fetchQ()
    navigate("/quiz")
  }

  


  return (
    <ChakraProvider>
    <div className='home'>
      <div className='home-title'>
        <span style={{fontSize: 50}}>Quiz options</span>

      <div className='settings__select'>
        {error&&<div style={{
          width: "100%",
          padding: 10,
          marginBottom: 10,
          borderRadius: 4,
          backgroundColor: "#fd0468",
          textAlign: "center",
          color: "white",
          textTransform: "capitalize",
        }}>You have to fill all the fields</div>}
      
      <Input   
      value={name}
      onChange={(e) => setName(e.target.value)}
        style={{marginBottom:25}}
        placeholder='Enter your name'
      />

<Select 
       placeholder='select category'
       value={category}
             onChange={(e) => setCategory(e.target.value)}
        style={{marginBottom:25 }}
      >

{categoryList.map((item) => (
              <option  key={item.category} value={item.value}>
                {item.category}
              </option >
            ))}

      </Select>

      <Select
            placeholder="Select Difficulty"
             value={difficulty}
             onChange={(e) => setDifficulty(e.target.value)}
            style={{ marginBottom: 30 }}
          >
            <option key="Easy" value="easy">
              Easy
            </option>
            <option key="Medium" value="medium">
              Medium
            </option>
            <option key="Hard" value="hard">
              Hard
            </option>
          </Select>


          <Button
          colorScheme='teal'
           size='md'
          variant='solid'
          onClick={startButton}
              >
            Start Quiz
          </Button>


      </div>


      </div>
      <img src='/reading.svg' className='home-img'></img>
      </div>
      </ChakraProvider>
  )
}

export default Home