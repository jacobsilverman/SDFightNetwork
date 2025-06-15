import React, { useState } from 'react';
import './Fighters.scss';

const dummyFighters = [
  {
    id: 1,
    name: 'Alex Johnson',
    height: "5'10\"",
    weight: '170 lbs',
    fightingStyles: ['Boxing', 'BJJ'],
    age: 28,
    yearsTraining: 5,
    location: 'San Diego, CA',
    gym: 'North Park MMA',
  },
  {
    id: 2,
    name: 'Maria Lee',
    height: "5'6\"",
    weight: '135 lbs',
    fightingStyles: ['Muay Thai', 'MMA'],
    age: 24,
    yearsTraining: 3,
    location: 'La Jolla, CA',
    gym: 'Shogun Combat Club',
  },
  // Add more fighters as needed
];

export default function Fighters() {
  const [fighters, setFighters] = useState(dummyFighters);
  const [filters, setFilters] = useState({
    fightingStyle: '',
    location: '',
    gym: '',
    minAge: '',
    maxAge: '',
    minYears: '',
    maxYears: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredFighters = fighters.filter(f => {
    const matchesStyle = !filters.fightingStyle || f.fightingStyles.includes(filters.fightingStyle);
    const matchesLocation = !filters.location || f.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesGym = !filters.gym || f.gym.toLowerCase().includes(filters.gym.toLowerCase());
    const matchesAge = (!filters.minAge || f.age >= +filters.minAge) && (!filters.maxAge || f.age <= +filters.maxAge);
    const matchesYears = (!filters.minYears || f.yearsTraining >= +filters.minYears) && (!filters.maxYears || f.yearsTraining <= +filters.maxYears);

    return matchesStyle && matchesLocation && matchesGym && matchesAge && matchesYears;
  });

  return (
    <div className="fighters-page">
      <h1 className="page-title">Find <span>Fighter</span></h1>

      {/* Filter Bar */}
      <div className="filter-bar">
        <input type="text" name="location" placeholder="Location" onChange={handleChange} />
        <input type="text" name="gym" placeholder="Gym" onChange={handleChange} />
        <select name="fightingStyle" onChange={handleChange}>
          <option value="">Any Style</option>
          <option value="Boxing">Boxing</option>
          <option value="Muay Thai">Muay Thai</option>
          <option value="BJJ">BJJ</option>
          <option value="MMA">MMA</option>
        </select>
        <input type="number" name="minAge" placeholder="Min Age" onChange={handleChange} />
        <input type="number" name="maxAge" placeholder="Max Age" onChange={handleChange} />
        <input type="number" name="minYears" placeholder="Min Years Training" onChange={handleChange} />
        <input type="number" name="maxYears" placeholder="Max Years Training" onChange={handleChange} />
      </div>

      {/* Fighter Cards */}
      <div className="fighter-list">
        {filteredFighters.map(fighter => (
          <div key={fighter.id} className="fighter-card">
            <h3>{fighter.name}</h3>
            <p><strong>Height:</strong> {fighter.height}</p>
            <p><strong>Weight:</strong> {fighter.weight}</p>
            <p><strong>Styles:</strong> {fighter.fightingStyles.join(', ')}</p>
            <p><strong>Age:</strong> {fighter.age}</p>
            <p><strong>Years Training:</strong> {fighter.yearsTraining}</p>
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