import questions from './models/questions'
import { useState } from 'react'

function App() {
  const [questionNow, setQuestionNow] = useState(0); //este estado revisara en que pregunta nos encontramos
  const [score, setScore] = useState(0);//este estado se encarga de revisar la puntuacion
  const [isFinished, setIsFinnished] = useState(false);//este estado se encargara de informar cuando el test se haya terminado
  // const [timeRemaining, setTimeRemaining] = useState(15);//estado para incorporar tiempo para responder cada pregunta
  // const [areDisabled, setAreDisabled] = useState(false);//estado que utlizaremos para desactivar los botones una vez terminado el tiempo para responder

function handleAnswerSubmit(isCorrect, e){
  //añadir puntuacion
  if (isCorrect) setScore(score + 1)
  //añadir estilos de pregunta, para saber si es correcta o incorrecta
  e.target.classList.add(isCorrect ? "correct" : "incorrect");
  //cambiar a la siguiente pregunta
  setTimeout(()=>{
    if (questionNow === questions.length - 1){
      setIsFinnished(true)
    }else{
      setQuestionNow(questionNow + 1);
    }  
  }, 1500)
}

// useEffect(()=>{
//   const interval = setInterval(()=>{
//     if (timeRemaining > 0) setTimeRemaining((prev)=> prev - 1)
//     if (timeRemaining === 0) setAreDisabled(true)
//   }, 1000)
//   return ()=> clearInterval(interval)
// }, [timeRemaining])

if(isFinished) 
  return (
  <main className='app'>
    <div className='finish'>
      <span>
        {" "}
        Obtuviste {score} de {questions.length}
        {" "}
      </span>
      <button onClick={()=> window.location.href="/"} className='btn-finish'>Return test</button>
    </div>
  </main>
)

  return (
    <main className='app'>
      <div className='number-question'>
        <span>Question {questionNow + 1} de {questions.length}</span> 
      </div>
    <div className='title'>
      <h1>ReactJs FrontEnd Developer Questions</h1>
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
