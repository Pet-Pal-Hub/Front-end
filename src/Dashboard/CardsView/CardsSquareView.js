import React, {useState, useEffect} from 'react';
import "./CardsSquareView.css";

function Dashboard({cards}) {
    const chunkArray = (array, size) => {
        return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
            array.slice(i * size, i * size + size)
        );
    };

    return(
        <div>
            {chunkArray(cards, 3).map((row, rowIndex) => (
                <div className="row mb-3">
                    {
                        row.map((card, index) => {
                            return (
                                <div className="col-4">
                                    <div className="card animal-card">
                                        <img src={card.img} className="animal-img" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{card.cardTitle}</h5>
                                            <div className="large-text-container">
                                                <p className="card-text truncate">{card.cardText}</p>
                                            </div>
                                            <a href={card.link} className="btn btn-primary bottom-right-button">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            ))}
        </div>
    );
}

export default Dashboard;