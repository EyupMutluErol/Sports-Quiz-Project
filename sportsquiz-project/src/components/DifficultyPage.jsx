import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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

    const sportTranslations = {
        football: "Futbol",
        basketball: "Basketbol",
        f1: "Formula 1",
        tennis: "Tenis"
      };

      const sportName = sportTranslations[sport]
  return (
    <div>
      <h1>{sportName} İçin Zorluk Seç</h1>
      <button onClick={() => handleDifficultySelect("easy")}>Kolay</button>
      <button onClick={() => handleDifficultySelect("medium")}>Orta</button>
      <button onClick={() => handleDifficultySelect("hard")}>Zor</button>
    </div>
  )
}

export default DifficultyPage
