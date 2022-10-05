import React from 'react';
import HotelCard from './HotelCard';
import { hotelsList } from "./HotelList";
import './Hotels.css';

function Hotels() {
  return (
    <div className="hotels-container">
        {
            hotelsList.map((hotel, index) => (
                <HotelCard 
                id={ hotel.id }
                location={ hotel.location }
                image={ hotel.image }
                distance={ hotel.distance }
                date={ hotel.date }
                rating={ hotel.rating }
                price={ hotel.price }
                />
            ))
        }
    </div>
  )
}

export default Hotels;