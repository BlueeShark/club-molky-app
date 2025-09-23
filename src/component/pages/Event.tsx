import React from 'react';
import './envent.css';
import { Carte } from '../atoms/carte'; 

export function Event() {
  return (
    <div>
      <div className='headers'>
        <input
          type="search"
          placeholder='Rechercher...'
          name="rechercher"
          className='search'
        />
        <button className='btnHome'>Rechercher</button>
        <br />
        <select name="Date2" id="un" className='select' aria-label="Date">
          <option value="">Date</option>
        </select>
      <select name="Date2" id="un" className='select' aria-label="Date">
          <option value="">Type</option>
        </select>
        <select name="Date2" id="un" className='select' aria-label="Date">
          <option value="">Tournois</option>
        </select>
      </div>
      <div className='cartesss'>
        <Carte />
        <Carte />
      </div>
    </div>
  );
}