import React, { useState } from 'react';
import './Trainers.scss';
import {trainersData} from "../../data/Trainers.jsx";
import { FIGHTING_STYLES_ARRAY } from "../../constants/fightingStyles";
import TrainerModal from "./TrainerModal";
import { supabaseHelpers } from '../../lib/supabase';
import toast, { Toaster } from 'react-hot-toast';

export default function Trainers() {
  const [trainers, setTrainers] = useState(trainersData.trainers);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newTrainer, setNewTrainer] = useState({
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

  const handleNewTrainerSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Prepare trainer data for Supabase
      const trainerData = {
        name: newTrainer.name,
        age: parseInt(newTrainer.age),
        record: newTrainer.record,
        height: newTrainer.height,
        weight: newTrainer.weight,
        fighting_styles: newTrainer.fightingStyles,
        location: newTrainer.location,
        gym: newTrainer.gym,
        contact: newTrainer.contact,
        years_training: parseInt(newTrainer.yearsTraining),
        // Note: For file uploads, you'd need to handle them separately
        // profile_image: newTrainer.profileImage,
        // profile_gif: newTrainer.profileGif,
      };

      const result = await supabaseHelpers.addTrainer(trainerData);
      
      // Add the new trainer to the local state
      setTrainers(prev => [...prev, {
        id: result.id,
        ...trainerData,
        profileImage: newTrainer.profileImage ? URL.createObjectURL(newTrainer.profileImage) : null,
        profileGif: newTrainer.profileGif ? URL.createObjectURL(newTrainer.profileGif) : null,
      }]);

      // Reset form
      setNewTrainer({
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

      toast.success('Trainer profile created successfully!');
      setShowModal(false);
    } catch (error) {
      console.error('Error adding trainer:', error);
      toast.error('Failed to create trainer profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const filteredTrainers = trainers.filter(f => {
    const matchesStyle = !filters.fightingStyle || f.fightingStyles.includes(filters.fightingStyle);
    const matchesLocation = !filters.location || f.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesGym = !filters.gym || f.gym.toLowerCase().includes(filters.gym.toLowerCase());
    const matchesAge = (!filters.minAge || f.age >= +filters.minAge) && (!filters.maxAge || f.age <= +filters.maxAge);
    const matchesYears = (!filters.minYears || f.yearsTraining >= +filters.minYears) && (!filters.maxYears || f.yearsTraining <= +filters.maxYears);

    return matchesStyle && matchesLocation && matchesGym && matchesAge && matchesYears;
  });

  return (
    <div className="page-container">
      <h1 className="page-title">Find <span>Trainers</span></h1>

      <div className="filter-container">
        {!filters.show && <button onClick={() => showFilter(true)} type="submit">Filter</button>}
        {filters.show && <button onClick={() => showFilter(false)}>Hide</button>}
        <button
            onClick={() => setShowModal((prev) => !prev)}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Sign Up as a Trainer'}
        </button>
      </div>
      {filters.show && <div className="filter-bar">
          <select name="fightingStyle" onChange={handleChange}>
            <option value="">Any Style</option>
            {FIGHTING_STYLES_ARRAY.map(style => (
              <option key={style} value={style}>{style}</option>
            ))}
          </select>
          {/* <input type="text" name="location" placeholder="Location" onChange={handleChange} />
          <input type="text" name="gym" placeholder="Gym" onChange={handleChange} />
          <input type="number" name="minAge" placeholder="Min Age" onChange={handleChange} />
          <input type="number" name="maxAge" placeholder="Max Age" onChange={handleChange} />
          <input type="number" name="minYears" placeholder="Min Years Training" onChange={handleChange} />
          <input type="number" name="maxYears" placeholder="Max Years Training" onChange={handleChange} /> */}
        </div>}

      {/* Trainer Cards */}
      <div className="trainer-list"> 
        {filteredTrainers.map((trainer, index) => (
          <div key={trainer.contact+trainer.id} className="trainer-card">
            <div className="trainer-name">{trainer.name}</div>
            <div className="trainer-profile">
              <img src={trainer.profileImage} className="trainer-image" />
              <img src={trainer.profileGif}  className="trainer-animation" />
            </div>

            <div className="grid grid-cols-2">
              <p><strong>Age:</strong> {trainer.age}</p>
              <p><strong>Record:</strong> {trainer.record}</p>
              <p><strong>Height:</strong> {trainer.height}</p> 
              <p><strong>Weight:</strong> {trainer.weight}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1">
              <p><strong>Styles:</strong> {trainer?.fightingStyles && trainer?.fightingStyles.toString()}</p>
              <p><strong>Location:</strong> {trainer.location}</p>
              <p><strong>Gym:</strong> {trainer.gym}</p>
              <p><strong>Contact:</strong> {trainer.contact}</p>
            </div>
          </div>
        ))}
      </div>

      <TrainerModal
        modalOpen={showModal}
        setModalOpen={setShowModal}
        newTrainer={newTrainer}
        setNewTrainer={setNewTrainer}
        handleNewTrainerSubmit={handleNewTrainerSubmit}
        loading={loading}
      />
    </div>
  );
}