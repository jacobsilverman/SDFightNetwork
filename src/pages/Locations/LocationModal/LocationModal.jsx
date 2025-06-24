import React, { useState } from "react";
import "./LocationModal.scss";
import { FIGHTING_STYLES_ARRAY } from "../../../constants/fightingStyles";

const LocationModal = ({ 
  modalOpen, 
  setModalOpen, 
  newLocation, 
  setNewLocation, 
  handleNewLocationSubmit 
}) => {
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const fightingStylesOptions = FIGHTING_STYLES_ARRAY;

  const handleStyleToggle = (style) => {
    setSelectedStyles(prev => {
      if (prev.includes(style)) {
        return prev.filter(s => s !== style);
      } else {
        return [...prev, style];
      }
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      setNewLocation((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const locationWithStyles = {
      ...newLocation,
      fightingStyles: selectedStyles
    };
    console.log("Submitting location:", locationWithStyles);
    handleNewLocationSubmit(e);
    setModalOpen(false);
    setSelectedStyles([]);
    setSelectedImage(null);
  };

  if (!modalOpen) return null;

  return (
    <div className="location-modal__overlay">
      <div className="location-modal__content">
        <button
          className="location-modal__close-button"
          onClick={() => setModalOpen(false)}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="location-modal__title">Register a New Location</h2>
        <form onSubmit={handleSubmit} className="location-modal__form">
          <input
            type="text"
            placeholder="Location Name"
            value={newLocation.name}
            onChange={(e) => setNewLocation((prev) => {return { ...prev, name: e.target.value }})}
            className="location-modal__input"
            required
          />
          
          <div className="location-modal__image-section">
            <h3 className="location-modal__section-title">Location Image</h3>
            <div className="location-modal__file-input-container">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="location-modal__file-input"
                id="location-image"
                required
              />
              <label htmlFor="location-image" className="location-modal__file-label">
                {selectedImage ? selectedImage.name : "Choose an image file"}
              </label>
            </div>
            {selectedImage && (
              <div className="location-modal__image-preview">
                <img 
                  src={URL.createObjectURL(selectedImage)} 
                  alt="Preview" 
                  className="location-modal__preview-image"
                />
              </div>
            )}
          </div>
          
          <div className="location-modal__address-section">
            <h3 className="location-modal__section-title">Address</h3>
            <input
              type="text"
              placeholder="Street Address"
              value={newLocation.street}
              onChange={(e) => setNewLocation((prev) => {return { ...prev, street: e.target.value }})}
              className="location-modal__input"
              required
            />
            <div className="location-modal__address-row">
              <input
                type="text"
                placeholder="City"
                value={newLocation.city}
                onChange={(e) => setNewLocation((prev) => {return { ...prev, city: e.target.value }})}
                className="location-modal__input"
                required
              />
              <input
                type="text"
                placeholder="State"
                value={newLocation.state}
                onChange={(e) => setNewLocation((prev) => {return { ...prev, state: e.target.value }})}
                className="location-modal__input"
                required
              />
            </div>
            <input
              type="text"
              placeholder="ZIP Code"
              value={newLocation.zipCode}
              onChange={(e) => setNewLocation((prev) => {return { ...prev, zipCode: e.target.value }})}
              className="location-modal__input"
              required
            />
          </div>

          <div className="location-modal__styles-section">
            <h3 className="location-modal__section-title">Fighting Styles Offered</h3>
            <div className="location-modal__styles-grid">
              {fightingStylesOptions.map((style) => (
                <label key={style} className="location-modal__style-option">
                  <input
                    type="checkbox"
                    checked={selectedStyles.includes(style)}
                    onChange={() => handleStyleToggle(style)}
                    className="location-modal__checkbox"
                  />
                  <span className="location-modal__style-label">{style}</span>
                </label>
              ))}
            </div>
          </div>

          <input
            type="number"
            placeholder="Price (hourly per person)"
            value={newLocation.price}
            onChange={(e) => setNewLocation((prev) => {return { ...prev, price: e.target.value }})}
            className="location-modal__input"
            min="0"
            step="0.01"
          />
          
          <input
            type="tel"
            placeholder="Phone Number"
            value={newLocation.phone}
            onChange={(e) => setNewLocation((prev) => {return { ...prev, phone: e.target.value }})}
            className="location-modal__input"
          />
          
          <input
            type="email"
            placeholder="Email Address"
            value={newLocation.email}
            onChange={(e) => setNewLocation((prev) => {return { ...prev, email: e.target.value }})}
            className="location-modal__input"
          />
          
          <input
            type="url"
            placeholder="Website URL"
            value={newLocation.website}
            onChange={(e) => setNewLocation((prev) => {return { ...prev, website: e.target.value }})}
            className="location-modal__input"
          />
          
          <button
            type="submit"
            className="location-modal__submit-button"
          >
            Submit Location
          </button>
        </form>
      </div>
    </div>
  );
};

export default LocationModal; 