import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import './HotelCard.css';

function HotelCard({ id, location, image, distance, date, rating, price }) {
  return (
    <div id={id} className='hotel-card'>
        <AiOutlineHeart />
        <img src={image} />
        <div>
            <span className='location'>{ location }</span>
            <span className='rating'>
                <AiFillStar /> { rating }
            </span>
        </div>
        <span className='distance'>{ distance }</span>
        <span className="date">{ date }</span>
        <span className='price'>
            &#x20B9;{ price } <span>{ " night" }</span>
        </span>
    </div>
  )
}

export default HotelCard;