import { ApartmentDescription } from '../components/ApartmentDescription';
import React from 'react';
import "./ApartmentPage.scss";

function ApartmentPage() {
  return (
    <div className="apartment-page">
        <div>
        <img src="https://picsum.photos/800/400"alt=""/>
        </div>
        <div className='apartment_header'>
            <div className='apartment_title'>
                <h1>Crazy Loft on Canal Saint Martin</h1>
                <h2>Paris, Ile de France</h2>
                <div className="apartment_tags">
                <span>Cozy</span>
                <span>Canal</span>
                <span>Paris 10</span>
                </div>
            </div>
            <div className='apartment_owner'>
            <div className='apartment_owner_details'>
                <h3><span>Alexandre</span><span>Dumas</span></h3>
                <div className='apartment_owner_badge'></div>
            </div>
            <div className='apartment_owner_stars'>
                <span className='on'>★</span>
                <span className='on'>★</span>
                <span className='on'>★</span>
                <span className='off'>★</span>
                <span className='off'>★</span>
            </div>
            </div>
        </div>
        <div className='apartment_description_area'>
            <ApartmentDescription />
            <ApartmentDescription />
        </div>
    </div>
  );
}

export default ApartmentPage