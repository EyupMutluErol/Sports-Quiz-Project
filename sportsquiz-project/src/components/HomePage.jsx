import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HomePage.css'
import {sportsData} from '../data/sportsData';

function HomePage() {
    const navigate = useNavigate();

    const handleNavigate = (sport) => {
        navigate('/difficulty', { state: { sport } });
    }
    return (
        <div className="container my-5">
            <div className="row">
                {sportsData.map((sport) => (
                    <div className="col-md-6 mb-4" key={sport.id}>
                        <div className="card h-100"> 
                            <img src={sport.image} alt={sport.name} className="card-img-top" />
                            <div className="card-body d-flex flex-column"> 
                                <h5 className="card-title">{sport.name}</h5>
                                <p className="card-text">{sport.description}</p>
                                <button
                                    className="btn btn-primary mt-auto" 
                                    onClick={() => handleNavigate(sport.id)}
                                >
                                    Başla
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage
