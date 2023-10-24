import Quiz from './components/Quiz'
import QuizQuestions from '../public/assets/data'
import FinishQuotes from '../public/assets/finishData'

function App() {

  return (
      <Quiz questions={QuizQuestions} finishData={FinishQuotes}/>
  )
}

export default App
