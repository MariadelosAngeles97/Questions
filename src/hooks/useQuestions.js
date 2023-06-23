import { useState } from 'react'
import questions from '../models/questions';


export const useQuestions = () => {
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

  return {questionNow,setQuestionNow,score,setScore, isFinished, setIsFinnished, handleAnswerSubmit}
}