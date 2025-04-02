import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import questions from '../data/questions';
import '../styles/TestPage.css'


function TestPage() {
  const [userAnswers,setUserAnswers] = useState({});
  const [showResult,setShowResult] = useState(false);

  const location = useLocation();
  const { sport, difficulty } = location.state;

  if (!sport || !difficulty) {
    return <p>Hata: Spor veya zorluk seviyesi seçilmedi!</p>;
  }

  const selectedQuestions = (questions[sport] || []).filter(
    (question) => question.difficulty === difficulty
  );

  const handleAnswerSelect = (questionIndex, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption
    }));
  };
  
  const checkAnswers = () =>{
    let correctCount = 0;
    selectedQuestions.map((q,index)=>{
      if(userAnswers[index] === q.answer){
        correctCount++;
      }
    })
    console.log(correctCount);
  }

  return (
    <div>
        {
          selectedQuestions.map((selectedQuestion, qIndex) => (
            <div key={qIndex} className='testDiv'>
              <p className='question'>{qIndex + 1}) {selectedQuestion.question}</p>
              {
                <div className='options'>
                  {selectedQuestion.options.map((option, oIndex) => (
                    <label key={oIndex} className="option-label">
                      <input
                        type="radio"
                        name={`question-${qIndex}`}
                        value={option}
                        className='option-input'
                        onChange={()=>handleAnswerSelect(qIndex,option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              }
            </div>
          ))
        }
        <button onClick={checkAnswers}>Testi Bitir</button>
    </div>
  )
}

export default TestPage
