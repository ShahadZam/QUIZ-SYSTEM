import './App.css';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import React, { useState } from 'react'



function App() {

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

 

  return (
    <BrowserRouter>
    <div className="App" style={{backgroundImage: "url(./quiz.png)"}}>
      <Header/>

      <Routes>

      <Route path='/' element={<Home name={name} setName={setName} category={category} setCategory={setCategory} difficulty={difficulty} setDifficulty={setDifficulty}   setQuestions={setQuestions}/>} />
      <Route path='/quiz' element={<Quiz name={name} questions={questions} setQuestions={setQuestions} score={score} setScore={setScore}/>} />
      <Route path='/result' element={<Result name={name} score={score}/>} />



      </Routes>

     
    </div>
    </BrowserRouter>
  );
}

export default App;
