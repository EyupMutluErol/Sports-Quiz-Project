import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/DifficultyPage.css'


function DifficultyPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const sport = location.state.sport;

    if (!sport) {
        return <p>Hata: Spor dalı seçilmedi!</p>;
      }

    const handleDifficultySelect = (difficulty) =>{
        navigate('/test',{ state: { sport, difficulty } })
    }

    const handleGoHome = () => {
    navigate('/');
  }

    const sportTranslations = {
        football: "Futbol",
        basketball: "Basketbol",
        f1: "Formula 1",
        tennis: "Tenis"
      };

      const sportName = sportTranslations[sport]
  return (
    <div>
      <h1 className='header'>{sportName} İçin Zorluk Seç</h1>
      <div className='buttons'>
        <button className='button' onClick={() => handleDifficultySelect("easy")}>Kolay</button>
        <button className='button' onClick={() => handleDifficultySelect("medium")}>Orta</button>
        <button className='button' onClick={() => handleDifficultySelect("hard")}>Zor</button>
      </div>
      <div className='toMainPageButton'>
        <button className="btn btn-secondary" onClick={handleGoHome}>
              Ana Sayfaya Dön
        </button>
      </div>
      
    </div>
  )
}

export default DifficultyPage
