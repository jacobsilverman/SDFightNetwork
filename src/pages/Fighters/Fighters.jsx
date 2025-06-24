import React, { useState } from 'react';
import './Fighters.scss';
import {fightersData} from "../../data/Fighters.jsx";
import { FIGHTING_STYLES_ARRAY } from "../../constants/fightingStyles";
import FighterModal from "./FighterModal";

export default function Fighters() {
  const [fighters, setFighters] = useState(fightersData.fighters);
  const [showModal, setShowModal] = useState(false);
  const [newFighter, setNewFighter] = useState({
    name: "",
    profileImage: null,
    profileGif: null,
    age: "",
    record: "",
    height: "",
    weight: "",
    fightingStyles: [],
    location: "",
    gym: "",
    contact: "",
    yearsTraining: "",
  });
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

  const handleNewFighterSubmit = (e) => {
    e.preventDefault();
    console.log("Register new fighter:", newFighter);
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
    <div className="page-container">
      <h1 className="page-title">Find <span>Fighters</span></h1>

      <div className="filter-container">
        {!filters.show && <button onClick={() => showFilter(true)} type="submit">Filter</button>}
        {filters.show && <button onClick={() => showFilter(false)}>Hide</button>}
        
        {filters.show && <div className="filter-bar">
          <select name="fightingStyle" onChange={handleChange}>
            <option value="">Any Style</option>
            {FIGHTING_STYLES_ARRAY.map(style => (
              <option key={style} value={style}>{style}</option>
            ))}
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

      <FighterModal
        modalOpen={showModal}
        setModalOpen={setShowModal}
        newFighter={newFighter}
        setNewFighter={setNewFighter}
        handleNewFighterSubmit={handleNewFighterSubmit}
      />
    </div>
  );
}