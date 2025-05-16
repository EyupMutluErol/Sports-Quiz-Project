import React, { useEffect, useState, useMemo } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import questions from '../data/questions';
import '../styles/TestPage.css'
import { toast } from 'react-toastify';


function TestPage() {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const { sport, difficulty } = location.state;

  const difficultyOrder = ["easy", "medium", "hard"];


  const handleGoToNextDifficulty = () => {
    if (actualNextDifficulty) {
      navigate('/test', {
        state: {
          sport: sport,
          difficulty: actualNextDifficulty
        }
      })
    }
  }


  const actualNextDifficulty = useMemo(() => {
    const currentIndex = difficultyOrder.findIndex(dif => dif === difficulty);
    if (currentIndex !== -1 && currentIndex < difficultyOrder.length - 1) {
      return difficultyOrder[currentIndex + 1]; 
    }
    return null; 
  }, [difficulty]);



  if (!sport || !difficulty) {
    useEffect(() => {
      if (!location.state) {
        navigate('/');
      }
    }, [location.state, navigate])
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

  const handleGoHome = () => {
    navigate('/');
  }

  const checkAnswers = () => {
    let correctCount = 0;
    selectedQuestions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        correctCount++;
      }
    })
    setScore(correctCount);
    setShowResult(true);
  }

  const handleRestartQuiz = () => {
    setUserAnswers({});
    setScore(0);
    setShowResult(false);
  }

  useEffect(() => {
    setScore(0);
    setShowResult(false);
    setUserAnswers({});
    window.scrollTo(0, 0);
  }, [sport, difficulty])


  return (
    <div className="container my-4 test-page-container">
      {showResult ? (
        <div className="results-container text-center p-4 shadow rounded">
          <h2 className="mb-3">Test Sonucu</h2>
          <p className="display-4">
            <strong>{score}</strong> / <strong>{selectedQuestions.length}</strong>
          </p>
          <p className="lead">
            Doğru cevap sayısı.
          </p>

          <div className="mt-4">
            <button className="btn btn-info me-2" onClick={handleRestartQuiz}>
              Bu Testi Yeniden Başlat
            </button>
            <button className="btn btn-secondary" onClick={handleGoHome}>
              Ana Sayfaya Dön
            </button>
            {actualNextDifficulty && ( 
              score >= 7 ? (
                <button className="btn btn-success ms-2 nextDifficultyBtn" onClick={handleGoToNextDifficulty}>
                  Sonraki Zorluğa Geç ({actualNextDifficulty.toUpperCase()})
                </button>
              ) : (
                (()=>{
                  toast.info("Sonraki Zorluğa Geçmek İçin En Az 7 Doğru Gerek");
                  return null;
                }) ()
                
              )
            )}
          </div>
        </div>
      ) : (

        <>
          <h2 className="text-center mb-3 quiz-header"> 
            {sport.toUpperCase()} Quiz - {difficulty.toUpperCase()} Seviye
          </h2>

          {selectedQuestions.map((selectedQuestion, qIndex) => (
            <div key={qIndex} className="card mb-4 testDiv shadow-sm question-card"> 
              <div className="card-body">
                <div className="question-meta mb-3"> 
                  <p className="question-text h5"> 
                    {selectedQuestion.question}
                  </p>
                  <span className="question-progress"> 
                    Soru {qIndex + 1} / {selectedQuestions.length}
                  </span>
                </div>

                <div className='options-container mt-2'> 
                  {selectedQuestion.options.map((option, oIndex) => (
                    <label 
                      key={oIndex}
                      htmlFor={`q${qIndex}_option${oIndex}`} 
                      className={`option-clickable-label mb-2 ${userAnswers[qIndex] === option ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        id={`q${qIndex}_option${oIndex}`} 
                        name={`question-${qIndex}`}
                        value={option}
                        className='visually-hidden option-actual-input'
                        checked={userAnswers[qIndex] === option}
                        onChange={() => handleAnswerSelect(qIndex, option)}
                      />
                      <span className="option-display-content">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-4 mb-5">
            <button
              className="btn btn-primary btn-lg"
              onClick={checkAnswers}
              disabled={
                (selectedQuestions.length > 0 && Object.keys(userAnswers).length !== selectedQuestions.length) ||
                selectedQuestions.length === 0
              }
            >
              Testi Bitir
            </button>
            {selectedQuestions.length > 0 && Object.keys(userAnswers).length !== selectedQuestions.length && (
              <p className="text-muted mt-2">Lütfen tüm soruları cevaplayınız.</p>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default TestPage
