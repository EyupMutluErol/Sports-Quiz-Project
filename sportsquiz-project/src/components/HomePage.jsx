import React from 'react'
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import f1_image from '../assets/f1_image.png'
import football_image from '../assets/football_image.jpg'
import basketball_image from '../assets/basketball_image.jpg'
import tennis_image from '../assets/tennis_image.jpeg'
import '../styles/HomePage.css'

function HomePage() {
    const navigate = useNavigate();

    const handleNavigate = (sport) =>{
        navigate('/difficulty',{state:{sport}});
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <img src={football_image} alt="Futbol" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Futbol</h5>
                            <p className="card-text">Futbol hakkında soruları cevapla.</p>
                            <button className="btn btn-primary" onClick={() => handleNavigate('football')}>Başla</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <img src={basketball_image} alt="Basketbol" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Basketbol</h5>
                            <p className="card-text">Basketbol hakkında soruları cevapla.</p>
                            <button className="btn btn-primary" onClick={() => handleNavigate('basketball')}>Başla</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card">
                        <img src={f1_image} alt="Formula 1" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Formula 1</h5>
                            <p className="card-text">Formula 1 hakkında soruları cevapla.</p>
                            <button className="btn btn-primary" onClick={() => handleNavigate('f1')}>Başla</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <img src={tennis_image} alt="Tenis" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Tenis</h5>
                            <p className="card-text">Tenis hakkında soruları cevapla.</p>
                            <button className="btn btn-primary" onClick={() => handleNavigate('tennis')}>Başla</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage
