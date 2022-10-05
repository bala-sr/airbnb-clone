import React, { useEffect } from 'react';
import { locationData } from "./LocationFilterData";
import { RiEqualizerLine, RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import "./LocationFilter.css";

function LocationFilter() {

    const adjustNavbarPosition = () => {
        const navbar = document.querySelector('.location-filter-container')
        if(window.pageYOffset > 100) {
            navbar.classList.add("active");
        } else {
            navbar.classList.remove("active");
        }
    }
    
    window.addEventListener('scroll', adjustNavbarPosition);
 
    // const slide = (e) => {
    //     console.log(e);
    //     let handle = e.target.className.baseVal;
    //     let leftHandle = document.querySelector(".left-handle");
    //     // console.log(handle);
    //     let locations = document.querySelector(".locations");
    //     let cs = getComputedStyle(locations);
    //     let locationsIndex = parseInt(cs.getPropertyValue("--locations-index"));
    //     if(handle == "right-handle") {
    //         locations.style.setProperty("--locations-index", locationsIndex + 5);
    //     } else {
    //         if(locationsIndex - 5 >= 0) {
    //             locations.style.setProperty("--locations-index", locationsIndex - 5);
    //         }
    //     }
    //     console.log("locationsIndex: ", locationsIndex);
    //     if(locationsIndex > 0) {
    //         leftHandle.style.setProperty("display", "flex");
    //     }
    // }

  return (
    <div className='location-filter-container'>
        {/* <RiArrowLeftSLine className="left-handle" onClick={(e) => slide(e)} /> */}
        <div className="locations snaps-inline">
            {
                locationData.map((data, index) => (
                    <button key={`key ${index}`} id={index} className="btn">
                        <img id={`img ${index}`} src={data.link} />
                        <span id={`desc ${index}`}>{data.desc}</span>
                    </button>
                ))
            }
        </div>
        {/* <RiArrowRightSLine className="right-handle" onClick={(e) => slide(e)} /> */}
        <div className="location-filters-flex">
            <div className="location-filters">
                <RiEqualizerLine />
                <span>Filters</span>
            </div>
        </div>
    </div>
  )
}

export default LocationFilter;