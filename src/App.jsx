import questions from './models/questions'
import { useQuestions } from './hooks/useQuestions'

const App = ({title, btnReturn}) => {
  
  const {questionNow,score, isFinished, handleAnswerSubmit} = useQuestions()

if(isFinished) 
  return (
  <main className='app'>
    <div className='finish'>
      <span>
        {" "}
        Obtuviste {score} de {questions.length}
        {" "}
      </span>
      <button onClick={()=> window.location.href="/"} className='btn-finish'>{btnReturn}</button>
    </div>
  </main>
)

  return (
    <main className='app'>

      <div className='number-question'>
        <span>Question {questionNow + 1} de {questions.length}</span> 
      </div>
      <div className='title'>
        <h1>{title}</h1>
      </div>
      <div className='left'>

      <div className='title-question'>
        {questions[questionNow].title}
      </div>

      <div>
        <span className='time-Remaining'>
          {/* Time remaining: {timeRemaining}{" "} */}
        </span>
      </div>

    </div>

    <div className='right'>
      {questions[questionNow].options.map((response)=>(
        <button
          // disabled={areDisabled}
          key={response.textResponse} 
          onClick={(e)=> handleAnswerSubmit(response.isCorrect, e)}
        >
          {" "}
          {response.textResponse}{" "}
        </button>
      ))}
    </div>
    </main>
  )
}

export default App
