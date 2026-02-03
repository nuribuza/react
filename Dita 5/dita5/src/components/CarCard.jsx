import React from 'react';
import "./Card.css";

function CarCard({ brand, model, year, description, image }) {
    return (
        <div className="car-card">
            <img src={image} className="car-image" alt={`${brand} ${model}`} />
            <h2 className="car-brand"> {brand}</h2>
            <p className="car-model">
                Modeli: <strong>{model}</strong>
            </p>
            <p className="car-year"> Viti i prodhimit: {year}</p>
            <p className="car-description">{description}</p>
        </div>
    );
}
export default CarCard;