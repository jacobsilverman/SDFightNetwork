import React, { useState } from "react";
import "./TrainerModal.scss";
import { FIGHTING_STYLES_ARRAY } from "../../../constants/fightingStyles";

const TrainerModal = ({ 
  modalOpen, 
  setModalOpen, 
  newTrainer, 
  setNewTrainer, 
  handleNewTrainerSubmit 
}) => {
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);
  const [selectedProfileGif, setSelectedProfileGif] = useState(null);
  
  const handleStyleToggle = (style) => {
    setSelectedStyles(prev => {
      if (prev.includes(style)) {
        return prev.filter(s => s !== style);
      } else {
        return [...prev, style];
      }
    });
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedProfileImage(file);
      setNewTrainer((prev) => ({ ...prev, profileImage: file }));
    }
  };

  const handleProfileGifChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedProfileGif(file);
      setNewTrainer((prev) => ({ ...prev, profileGif: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trainerWithStyles = {
      ...newTrainer,
      fightingStyles: selectedStyles
    };
    console.log("Submitting trainer:", trainerWithStyles);
    handleNewTrainerSubmit(e);
    setModalOpen(false);
    setSelectedStyles([]);
    setSelectedProfileImage(null);
    setSelectedProfileGif(null);
  };

  if (!modalOpen) return null;

  return (
    <div className="trainer-modal__overlay">
      <div className="trainer-modal__content">
        <button
          className="trainer-modal__close-button"
          onClick={() => setModalOpen(false)}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="trainer-modal__title">Sign Up as a Trainer</h2>
        <form onSubmit={handleSubmit} className="trainer-modal__form">
          <input
            type="text"
            placeholder="Trainer Name"
            value={newTrainer.name}
            onChange={(e) => setNewTrainer((prev) => {return { ...prev, name: e.target.value }})}
            className="trainer-modal__input"
            required
          />
          
          <div className="trainer-modal__image-section">
            <h3 className="trainer-modal__section-title">Profile Images</h3>
            <div className="trainer-modal__file-input-container">
              <input
                type="file"
                accept="image/*"
                onChange={handleProfileImageChange}
                className="trainer-modal__file-input"
                id="trainer-profile-image"
                required
              />
              <label htmlFor="trainer-profile-image" className="trainer-modal__file-label">
                {selectedProfileImage ? selectedProfileImage.name : "Choose Profile Image"}
              </label>
            </div>
            {selectedProfileImage && (
              <div className="trainer-modal__image-preview">
                <img 
                  src={URL.createObjectURL(selectedProfileImage)} 
                  alt="Profile Preview" 
                  className="trainer-modal__preview-image"
                />
              </div>
            )}
            
            <div className="trainer-modal__file-input-container">
              <input
                type="file"
                accept="image/*"
                onChange={handleProfileGifChange}
                className="trainer-modal__file-input"
                id="trainer-profile-gif"
                required
              />
              <label htmlFor="trainer-profile-gif" className="trainer-modal__file-label">
                {selectedProfileGif ? selectedProfileGif.name : "Choose Profile GIF/Animation"}
              </label>
            </div>
            {selectedProfileGif && (
              <div className="trainer-modal__image-preview">
                <img 
                  src={URL.createObjectURL(selectedProfileGif)} 
                  alt="GIF Preview" 
                  className="trainer-modal__preview-image"
                />
              </div>
            )}
          </div>

          <div className="trainer-modal__personal-section">
            <h3 className="trainer-modal__section-title">Personal Information</h3>
            <div className="trainer-modal__personal-row">
              <input
                type="number"
                placeholder="Age"
                value={newTrainer.age}
                onChange={(e) => setNewTrainer((prev) => {return { ...prev, age: e.target.value }})}
                className="trainer-modal__input"
                min="0"
                required
              />
              <input
                type="text"
                placeholder="Record (e.g., 4-0)"
                value={newTrainer.record}
                onChange={(e) => setNewTrainer((prev) => {return { ...prev, record: e.target.value }})}
                className="trainer-modal__input"
                required
              />
            </div>
            <div className="trainer-modal__personal-row">
              <input
                type="text"
                placeholder="Height (e.g., 5'7&quot;)"
                value={newTrainer.height}
                onChange={(e) => setNewTrainer((prev) => {return { ...prev, height: e.target.value }})}
                className="trainer-modal__input"
                required
              />
              <input
                type="text"
                placeholder="Weight (e.g., 135 lbs)"
                value={newTrainer.weight}
                onChange={(e) => setNewTrainer((prev) => {return { ...prev, weight: e.target.value }})}
                className="trainer-modal__input"
                required
              />
            </div>
            <input
              type="number"
              placeholder="Years Training"
              value={newTrainer.yearsTraining}
              onChange={(e) => setNewTrainer((prev) => {return { ...prev, yearsTraining: e.target.value }})}
              className="trainer-modal__input"
              min="0"
              required
            />
          </div>

          <div className="trainer-modal__styles-section">
            <h3 className="trainer-modal__section-title">Fighting Styles</h3>
            <div className="trainer-modal__styles-grid">
              {FIGHTING_STYLES_ARRAY.map((style) => (
                <label key={style} className="trainer-modal__style-option">
                  <input
                    type="checkbox"
                    checked={selectedStyles.includes(style)}
                    onChange={() => handleStyleToggle(style)}
                    className="trainer-modal__checkbox"
                  />
                  <span className="trainer-modal__style-label">{style}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="trainer-modal__location-section">
            <h3 className="trainer-modal__section-title">Location & Contact</h3>
            <input
              type="text"
              placeholder="Location (e.g., La Jolla, CA)"
              value={newTrainer.location}
              onChange={(e) => setNewTrainer((prev) => {return { ...prev, location: e.target.value }})}
              className="trainer-modal__input"
              required
            />
            <input
              type="text"
              placeholder="Gym"
              value={newTrainer.gym}
              onChange={(e) => setNewTrainer((prev) => {return { ...prev, gym: e.target.value }})}
              className="trainer-modal__input"
              required
            />
            <input
              type="tel"
              placeholder="Contact Phone"
              value={newTrainer.contact}
              onChange={(e) => setNewTrainer((prev) => {return { ...prev, contact: e.target.value }})}
              className="trainer-modal__input"
              required
            />
          </div>
          
          <button
            type="submit"
            className="trainer-modal__submit-button"
          >
            Submit Trainer Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrainerModal; 