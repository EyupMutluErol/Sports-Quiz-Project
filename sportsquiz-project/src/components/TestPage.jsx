import React, { useEffect, useState, useMemo } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import questions from '../data/questions';
import '../styles/TestPage.css'


function TestPage() {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const { sport, difficulty } = location.state;

  const difficultyOrder = ["easy", "medium", "hard"];

  let nextDifficulty;

  const handleGoToNextDifficulty = () => {
    if(actualNextDifficulty){
      navigate('/test',{
        state:{
          sport:sport,
          difficulty:actualNextDifficulty
        }
      })
    }}
    

  const actualNextDifficulty = useMemo(() => {
    const currentIndex = difficultyOrder.findIndex(dif => dif === difficulty);
    // Eğer mevcut zorluk dizide bulunduysa VE son eleman değilse:
    if (currentIndex !== -1 && currentIndex < difficultyOrder.length - 1) {
      return difficultyOrder[currentIndex + 1]; // Bir sonraki zorluğu döndür
    }
    return null; // Aksi halde (son zorlukta veya bir hata varsa) null döndür
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

  useEffect(()=>{
    setScore(0);
    setShowResult(false);
    setUserAnswers({});
    window.scrollTo(0,0);
  },[sport,difficulty])


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
            {actualNextDifficulty && ( // Sadece actualNextDifficulty bir değere sahipse (null değilse) butonu göster
              <button className="btn btn-success ms-2 nextDifficultyBtn" onClick={handleGoToNextDifficulty}>
                Sonraki Zorluğa Geç ({actualNextDifficulty.toUpperCase()})
              </button>
            )}
          </div>
        </div>
      ) : (

        <>
          <h2 className="text-center mb-3 quiz-header"> {/* Yeni CSS class'ı */}
            {sport.toUpperCase()} Quiz - {difficulty.toUpperCase()} Seviye
          </h2>

          {selectedQuestions.map((selectedQuestion, qIndex) => (
            <div key={qIndex} className="card mb-4 testDiv shadow-sm question-card"> {/* Yeni CSS class'ı ve artırılmış mb */}
              <div className="card-body">
                <div className="question-meta mb-3"> {/* Soru metni ve ilerleme için bir sarmalayıcı */}
                  <p className="question-text h5"> {/* card-title yerine daha spesifik class */}
                    {selectedQuestion.question}
                  </p>
                  <span className="question-progress"> {/* İlerleme göstergesi */}
                    Soru {qIndex + 1} / {selectedQuestions.length}
                  </span>
                </div>

                <div className='options-container mt-2'> {/* mt-2'yi mt-3 veya 4 yapabiliriz */}
                  {selectedQuestion.options.map((option, oIndex) => (
                    <label // Artık ana tıklanabilir öğemiz bu label
                      key={oIndex}
                      htmlFor={`q${qIndex}_option${oIndex}`} // Input'un ID'sine bağlanıyor
                      className={`option-clickable-label mb-2 ${userAnswers[qIndex] === option ? 'selected' : ''}`}
                    // Bütün stil ve tıklama alanı bu label üzerinde olacak
                    >
                      <input
                        type="radio"
                        id={`q${qIndex}_option${oIndex}`} // Benzersiz ID
                        name={`question-${qIndex}`}
                        value={option}
                        // Bootstrap 5 kullanıyorsanız 'visually-hidden' sınıfı input'u görsel olarak gizler
                        // ama erişilebilirliğini korur. Eğer Bootstrap 5 yoksa, benzer bir CSS sınıfı oluşturmanız gerekir.
                        className='visually-hidden option-actual-input'
                        checked={userAnswers[qIndex] === option}
                        onChange={() => handleAnswerSelect(qIndex, option)}
                      />
                      {/* Kullanıcıya gösterilecek içerik bu span içinde olacak */}
                      <span className="option-display-content">
                        {/* İsteğe Bağlı: Kendi özel radyo düğmenizin görünümünü buraya ekleyebilirsiniz */}
                        {/* <span className="custom-radio-indicator"></span> */}
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
