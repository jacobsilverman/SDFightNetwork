import React, { useState } from "react";
import "./FighterModal.scss";
import { FIGHTING_STYLES_ARRAY } from "../../../constants/fightingStyles";

const FighterModal = ({ 
  modalOpen, 
  setModalOpen, 
  newFighter, 
  setNewFighter, 
  handleNewFighterSubmit,
  loading = false
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
      setNewFighter((prev) => ({ ...prev, profileImage: file }));
    }
  };

  const handleProfileGifChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedProfileGif(file);
      setNewFighter((prev) => ({ ...prev, profileGif: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fighterWithStyles = {
      ...newFighter,
      fightingStyles: selectedStyles
    };
    console.log("Submitting fighter:", fighterWithStyles);
    handleNewFighterSubmit(e);
    setModalOpen(false);
    setSelectedStyles([]);
    setSelectedProfileImage(null);
    setSelectedProfileGif(null);
  };

  if (!modalOpen) return null;

  return (
    <div className="fighter-modal__overlay">
      <div className="fighter-modal__content">
        <button
          className="fighter-modal__close-button"
          onClick={() => setModalOpen(false)}
          aria-label="Close"
          disabled={loading}
        >
          ×
        </button>
        <h2 className="fighter-modal__title">Sign Up as a Fighter</h2>
        <form onSubmit={handleSubmit} className="fighter-modal__form">
          <input
            type="text"
            placeholder="Fighter Name"
            value={newFighter.name}
            onChange={(e) => setNewFighter((prev) => {return { ...prev, name: e.target.value }})}
            className="fighter-modal__input"
            required
            disabled={loading}
          />
          
          <div className="fighter-modal__image-section">
            <h3 className="fighter-modal__section-title">Profile Images</h3>
            <div className="fighter-modal__file-input-container">
              <input
                type="file"
                accept="image/*"
                onChange={handleProfileImageChange}
                className="fighter-modal__file-input"
                id="fighter-profile-image"
                required
                disabled={loading}
              />
              <label htmlFor="fighter-profile-image" className="fighter-modal__file-label">
                {selectedProfileImage ? selectedProfileImage.name : "Choose Profile Image"}
              </label>
            </div>
            {selectedProfileImage && (
              <div className="fighter-modal__image-preview">
                <img 
                  src={URL.createObjectURL(selectedProfileImage)} 
                  alt="Profile Preview" 
                  className="fighter-modal__preview-image"
                />
              </div>
            )}
            
            <div className="fighter-modal__file-input-container">
              <input
                type="file"
                accept="image/*"
                onChange={handleProfileGifChange}
                className="fighter-modal__file-input"
                id="fighter-profile-gif"
                required
                disabled={loading}
              />
              <label htmlFor="fighter-profile-gif" className="fighter-modal__file-label">
                {selectedProfileGif ? selectedProfileGif.name : "Choose Profile GIF/Animation"}
              </label>
            </div>
            {selectedProfileGif && (
              <div className="fighter-modal__image-preview">
                <img 
                  src={URL.createObjectURL(selectedProfileGif)} 
                  alt="GIF Preview" 
                  className="fighter-modal__preview-image"
                />
              </div>
            )}
          </div>

          <div className="fighter-modal__personal-section">
            <h3 className="fighter-modal__section-title">Personal Information</h3>
            <div className="fighter-modal__personal-row">
              <input
                type="number"
                placeholder="Age"
                value={newFighter.age}
                onChange={(e) => setNewFighter((prev) => {return { ...prev, age: e.target.value }})}
                className="fighter-modal__input"
                min="0"
                required
                disabled={loading}
              />
              <input
                type="text"
                placeholder="Record (e.g., 4-0)"
                value={newFighter.record}
                onChange={(e) => setNewFighter((prev) => {return { ...prev, record: e.target.value }})}
                className="fighter-modal__input"
                required
                disabled={loading}
              />
            </div>
            <div className="fighter-modal__personal-row">
              <input
                type="text"
                placeholder="Height (e.g., 5'7&quot;)"
                value={newFighter.height}
                onChange={(e) => setNewFighter((prev) => {return { ...prev, height: e.target.value }})}
                className="fighter-modal__input"
                required
                disabled={loading}
              />
              <input
                type="text"
                placeholder="Weight (e.g., 135 lbs)"
                value={newFighter.weight}
                onChange={(e) => setNewFighter((prev) => {return { ...prev, weight: e.target.value }})}
                className="fighter-modal__input"
                required
                disabled={loading}
              />
            </div>
            <input
              type="number"
              placeholder="Years Training"
              value={newFighter.yearsTraining}
              onChange={(e) => setNewFighter((prev) => {return { ...prev, yearsTraining: e.target.value }})}
              className="fighter-modal__input"
              min="0"
              required
              disabled={loading}
            />
          </div>

          <div className="fighter-modal__styles-section">
            <h3 className="fighter-modal__section-title">Fighting Styles</h3>
            <div className="fighter-modal__styles-grid">
              {FIGHTING_STYLES_ARRAY.map((style) => (
                <label key={style} className="fighter-modal__style-option">
                  <input
                    type="checkbox"
                    checked={selectedStyles.includes(style)}
                    onChange={() => handleStyleToggle(style)}
                    className="fighter-modal__checkbox"
                    disabled={loading}
                  />
                  <span className="fighter-modal__style-label">{style}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="fighter-modal__location-section">
            <h3 className="fighter-modal__section-title">Location & Contact</h3>
            <input
              type="text"
              placeholder="Location (e.g., La Jolla, CA)"
              value={newFighter.location}
              onChange={(e) => setNewFighter((prev) => {return { ...prev, location: e.target.value }})}
              className="fighter-modal__input"
              required
              disabled={loading}
            />
            <input
              type="text"
              placeholder="Gym"
              value={newFighter.gym}
              onChange={(e) => setNewFighter((prev) => {return { ...prev, gym: e.target.value }})}
              className="fighter-modal__input"
              required
              disabled={loading}
            />
            <input
              type="tel"
              placeholder="Contact Phone"
              value={newFighter.contact}
              onChange={(e) => setNewFighter((prev) => {return { ...prev, contact: e.target.value }})}
              className="fighter-modal__input"
              required
              disabled={loading}
            />
          </div>
          
          <button
            type="submit"
            className="fighter-modal__submit-button"
            disabled={loading}
          >
            {loading ? 'Creating Profile...' : 'Submit Fighter Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FighterModal; 