import React, { useState } from 'react';
import './Fighters.scss';
import {fightersData} from "../../data/Fighters.jsx";

export default function Fighters() {
  const [fighters, setFighters] = useState(fightersData.fighters);
  const [filters, setFilters] = useState({
    fightingStyle: '',
    location: '',
    gym: '',
    minAge: '',
    maxAge: '',
    minYears: '',
    maxYears: '',
    show: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const showFilter = (display) => {
    setFilters(prev => ({ ...prev, show: display }));
  }

  const filteredFighters = fighters.filter(f => {
    const matchesStyle = !filters.fightingStyle || f.fightingStyles.includes(filters.fightingStyle);
    const matchesLocation = !filters.location || f.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesGym = !filters.gym || f.gym.toLowerCase().includes(filters.gym.toLowerCase());
    const matchesAge = (!filters.minAge || f.age >= +filters.minAge) && (!filters.maxAge || f.age <= +filters.maxAge);
    const matchesYears = (!filters.minYears || f.yearsTraining >= +filters.minYears) && (!filters.maxYears || f.yearsTraining <= +filters.maxYears);

    return matchesStyle && matchesLocation && matchesGym && matchesAge && matchesYears;
  });

  return (
    <div className="page-container">
      <h1 className="page-title">Find <span>Fighters</span></h1>

      <div className="filter-container">
        {!filters.show && <button onClick={() => showFilter(true)} type="submit">Filter</button>}
        {filters.show && <button onClick={() => showFilter(false)}>Hide</button>}
        {filters.show && <div className="filter-bar">
          <select name="fightingStyle" onChange={handleChange}>
            <option value="">Any Style</option>
            <option value="Boxing">Boxing</option>
            <option value="Muay Thai">Muay Thai</option>
            <option value="BJJ">BJJ</option>
            <option value="MMA">MMA</option>
          </select>
          <input type="text" name="location" placeholder="Location" onChange={handleChange} />
          <input type="text" name="gym" placeholder="Gym" onChange={handleChange} />
          <input type="number" name="minAge" placeholder="Min Age" onChange={handleChange} />
          <input type="number" name="maxAge" placeholder="Max Age" onChange={handleChange} />
          <input type="number" name="minYears" placeholder="Min Years Training" onChange={handleChange} />
          <input type="number" name="maxYears" placeholder="Max Years Training" onChange={handleChange} />
        </div>}
      </div>

      {/* Fighter Cards */}
      <div className="fighter-list">
        {filteredFighters.map((fighter, index) => (
          <div key={fighter.id} className="fighter-card">
            <div className="fighter-name">{fighter.name}</div>
            <div className="fighter-profile">
              <img src={fighter.profileImage} className="fighter-image" />
              <img src={fighter.profileGif}  className="fighter-animation" />
            </div>
            <p><strong>Age:</strong> {fighter.age}</p>
            <p><strong>Height:</strong> {fighter.height}</p> 
            <p><strong>Weight:</strong> {fighter.weight}</p>
            <p><strong>Years Training:</strong> {fighter.yearsTraining}</p>
            <p><strong>Styles:</strong> {fighter.fightingStyles.join(', ')}</p>
            <p><strong>Location:</strong> {fighter.location}</p>
            <p><strong>Gym:</strong> {fighter.gym}</p>
          </div>
        ))}
      </div>

      {/* Sign Up Form */}
      <div className="sign-up">
        <h2>Sign Up as a Fighter</h2>
        {/* You can wire this up with a form handler or Firebase later */}
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="Gym" />
          <input type="number" placeholder="Age" />
          <input type="number" placeholder="Years Training" />
          <input type="text" placeholder="Fighting Styles (comma separated)" />
          <input type="text" placeholder="Height" />
          <input type="text" placeholder="Weight" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}