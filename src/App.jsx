import Quiz from './components/Quiz'
import QuizQuestions from './assets/data'
import FinishQuotes from './assets/finishData'

function App() {

  return (
      <Quiz questions={QuizQuestions} finishData={FinishQuotes}/>
  )
}

export default App
