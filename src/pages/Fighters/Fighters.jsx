import React, { useState } from 'react';
import './Fighters.scss';
import {fightersData} from "../../data/Fighters.jsx";

export default function Fighters() {
  const [fighters, setFighters] = useState(fightersData.fighters);
  const [showModal, setShowModal] = useState(false);
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
        <button
            onClick={() => setShowModal((prev) => !prev)}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Sign Up as a Fighter
        </button>
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
            <div className="grid grid-cols-2">
              <p><strong>Age:</strong> {fighter.age}</p>
              <p><strong>Record:</strong> {fighter.record}</p>
              <p><strong>Height:</strong> {fighter.height}</p> 
              <p><strong>Weight:</strong> {fighter.weight}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1">
              <p><strong>Styles:</strong> {fighter.fightingStyles.join(', ')}</p>
              <p><strong>Location:</strong> {fighter.location}</p>
              <p><strong>Gym:</strong> {fighter.gym}</p>
              <p><strong>Contact:</strong> {fighter.contact}</p>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        {/* Modal Content */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
          <button
            onClick={() => setShowModal((prev)  => !prev)}
            className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
          >
            &times;
          </button>

          <h2 className="text-2xl font-semibold mb-4">Sign Up as a Fighter</h2>

          <form className="flex flex-col gap-3">
            <input type="text" placeholder="Name" className="border p-2 rounded" />
            <input type="text" placeholder="Location" className="border p-2 rounded" />
            <input type="text" placeholder="Gym" className="border p-2 rounded" />
            <input type="number" placeholder="Age" className="border p-2 rounded" />
            <input type="number" placeholder="Years Training" className="border p-2 rounded" />
            <input type="text" placeholder="Fighting Styles (comma separated)" className="border p-2 rounded" />
            <input type="text" placeholder="Height" className="border p-2 rounded" />
            <input type="text" placeholder="Weight" className="border p-2 rounded" />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>)}
    </div>
  );
}