import React, { useState } from 'react';
import './Trainers.scss';

const dummyTrainers = [
  {
    id: 1,
    name: 'Coach Amanda Rivera',
    height: `5'7"`,
    weight: '150 lbs',
    stylesTaught: ['Muay Thai', 'Boxing'],
    age: 34,
    yearsTraining: 12,
    location: 'Los Angeles, CA',
    gym: 'Elite Combat Club',
    contactLink: 'mailto:amanda@elitecombat.com',
  },
  {
    id: 2,
    name: 'Sensei David Kim',
    height: `5'9"`,
    weight: '165 lbs',
    stylesTaught: ['BJJ', 'MMA'],
    age: 40,
    yearsTraining: 18,
    location: 'San Diego, CA',
    gym: 'Ground Force Academy',
    contactLink: 'mailto:kim@groundforce.com',
  },
  {
    id: 3,
    name: 'Coach Malik Johnson',
    height: `6'0"`,
    weight: '180 lbs',
    stylesTaught: ['Boxing', 'Kickboxing'],
    age: 29,
    yearsTraining: 10,
    location: 'San Francisco, CA',
    gym: 'Iron Fist Training',
    contactLink: 'mailto:malik@ironfist.com',
  },
];

export default function TrainersPage() {
  const [trainers, setTrainers] = useState(dummyTrainers);
  const [filters, setFilters] = useState({
    style: '',
    location: '',
    gym: '',
    minYears: '',
    maxYears: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredTrainers = trainers.filter(t => {
    const matchesStyle = !filters.style || t.stylesTaught.includes(filters.style);
    const matchesLocation = !filters.location || t.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesGym = !filters.gym || t.gym.toLowerCase().includes(filters.gym.toLowerCase());
    const matchesYears = (!filters.minYears || t.yearsTraining >= +filters.minYears) &&
                         (!filters.maxYears || t.yearsTraining <= +filters.maxYears);
    return matchesStyle && matchesLocation && matchesGym && matchesYears;
  });

  return (
    <div className="trainers-page">
      <h1>Find a Trainer</h1>

      {/* Filter Bar */}
      <div className="filter-bar">
        <input type="text" name="location" placeholder="Location" onChange={handleChange} />
        <input type="text" name="gym" placeholder="Gym" onChange={handleChange} />
        <select name="style" onChange={handleChange}>
          <option value="">Any Style</option>
          <option value="Boxing">Boxing</option>
          <option value="Muay Thai">Muay Thai</option>
          <option value="BJJ">BJJ</option>
          <option value="MMA">MMA</option>
          <option value="Kickboxing">Kickboxing</option>
        </select>
        <input type="number" name="minYears" placeholder="Min Years Training" onChange={handleChange} />
        <input type="number" name="maxYears" placeholder="Max Years Training" onChange={handleChange} />
      </div>

      {/* Trainer Cards */}
      <div className="trainer-list">
        {filteredTrainers.map(trainer => (
          <div key={trainer.id} className="trainer-card">
            <h3>{trainer.name}</h3>
            <p><strong>Height:</strong> {trainer.height}</p>
            <p><strong>Weight:</strong> {trainer.weight}</p>
            <p><strong>Styles Taught:</strong> {trainer.stylesTaught.join(', ')}</p>
            <p><strong>Age:</strong> {trainer.age}</p>
            <p><strong>Years Training:</strong> {trainer.yearsTraining}</p>
            <p><strong>Location:</strong> {trainer.location}</p>
            <p><strong>Gym:</strong> {trainer.gym}</p>
            <a href={trainer.contactLink} target="_blank" rel="noopener noreferrer">
              Contact Trainer
            </a>
          </div>
        ))}
      </div>

      {/* Sign Up Form */}
      <div className="sign-up">
        <h2>Sign Up as a Trainer</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Height (e.g., 5'11)" />
          <input type="text" placeholder="Weight (e.g., 170 lbs)" />
          <input type="text" placeholder="Styles Taught (comma separated)" />
          <input type="number" placeholder="Age" />
          <input type="number" placeholder="Years Training" />
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="Gym" />
          <input type="text" placeholder="Contact Link (email or website)" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
