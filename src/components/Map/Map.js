import React from 'react';
import { BsMapFill } from 'react-icons/bs';
import "./Map.css";

function Map() {
  return (
    <>
        <button className="map-btn">
            <span>
                Show map
            </span>
            <BsMapFill />
        </button>
    </>
  )
}

export default Map;