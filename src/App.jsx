import Quiz from './components/Quiz'
import createQuizQuestions from '../public/assets/data'
import FinishQuotes from '../public/assets/finishData'
import { useState } from 'react'

function App() {
  const [quizQuestions,setQuizQuestions] = useState(createQuizQuestions())
  return (
      <Quiz questions={quizQuestions} resetQuestions={setQuizQuestions} finishData={FinishQuotes}/>
  )
}

export default App
