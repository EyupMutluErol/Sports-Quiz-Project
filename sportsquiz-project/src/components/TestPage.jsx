import React from 'react'
import { useLocation } from 'react-router-dom'
import questions from '../data/questions';
import '../styles/TestPage.css'


function TestPage() {

  const location = useLocation();
  const { sport, difficulty } = location.state;

  if (!sport || !difficulty) {
    return <p>Hata: Spor veya zorluk seviyesi seçilmedi!</p>;
  }

  const selectedQuestions = (questions[sport] || []).filter(
    (question) => question.difficulty === difficulty
  );
  return (
    <div>
      {
        selectedQuestions.map((selectedQuestion, qIndex) => (
          <div key={qIndex}>
            <h1>{selectedQuestion.question}</h1>
            {
              <div className='options'>
                {selectedQuestion.options.map((option,oIndex)=>(
                  <label key={oIndex} className="option">
                  <input
                    type="radio"
                    name={`question-${qIndex}`} 
                    value={option}
                    // checked={selectedAnswers[qIndex] === option}
                    // onChange={() => handleSelect(qIndex, option)}
                  />
                  {option}
                </label>
                ))}

                
              </div>

            }



          </div>


        ))
      }
    </div>
  )
}

export default TestPage
