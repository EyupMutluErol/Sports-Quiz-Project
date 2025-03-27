import React from 'react'
import { useLocation } from 'react-router-dom'
import questions from '../data/questions';

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
        selectedQuestions.map((selectedQuestion, index) => (
          <h1 key={index}>{selectedQuestion.question}</h1>
        ))
      }
    </div>
  )
}

export default TestPage
