import React, { useState, useMemo } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import "./Locations.scss";
import gymData from '../../data/Gyms.json';
import privateData from '../../data/Private.json';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const containerStyle = {
  height: "500px",
};

const center = {
  lat: 32.7157,
  lng: -117.1611,
};

const Locations = () => {
  const [radius, setRadius] = useState(500); // miles
  const [searchLat, setSearchLat] = useState(center.lat);
  const [searchLng, setSearchLng] = useState(center.lng);
  const [mapCenter, setMapCenter] = useState(center);
  const [show, setShow] = useState({ gyms: true, private: true });
  const [modalOpen, setModalOpen] = useState(false);
  const [newLocation, setNewLocation] = useState({
    name: "",
    lat: "",
    lng: "",
  });
  const [hoveredMarkerId, setHoveredMarkerId] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA6rL31DnP10K5YajtIaCFQAtONg4xGZys",
  });

  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const toRadians = (deg) => (deg * Math.PI) / 180;
    const R = 3958.8; // Radius of Earth in miles
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const filterLocationsByRadius = (locations) => {
    return locations?.filter((loc) => {
      const distance = calculateDistance(searchLat, searchLng, loc.lat, loc.lng);
      return distance <= radius;
    });
  };

  const filteredGymLocations = useMemo(() => {
    return filterLocationsByRadius(gymData?.gyms);
  }, [searchLat, searchLng, radius]);

  const filteredPrivateLocations = useMemo(() => {
    return filterLocationsByRadius(privateData?.private);
  }, [searchLat, searchLng, radius]);

  const handleNewLocationSubmit = (e) => {
    e.preventDefault();
    console.log("Register new location:", newLocation);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Training <span>Locations</span></h1>

      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={9}
        >
          {[...filteredGymLocations, ...filteredPrivateLocations]?.map((loc) => (
            <Marker
              key={loc.id + loc.name}
              position={{ lat: loc.lat, lng: loc.lng }}
              onMouseOver={() => setHoveredMarkerId(loc.id + loc.name)}
              onMouseOut={() => setHoveredMarkerId(null)}
            >
              {hoveredMarkerId === loc.id + loc.name && (
                <InfoWindow position={{ lat: loc.lat, lng: loc.lng }}>
                  <div>{loc.name}</div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      )}

      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 items-center justify-around gap-4">
          <label>
            Latitude:{" "}
            <input
              type="number"
              value={searchLat}
              onChange={(e) => setSearchLat(Number(e.target.value))}
              className="border p-1 rounded"
            />
          </label>
          <label>
            Longitude:{" "}
            <input
              type="number"
              value={searchLng}
              onChange={(e) => setSearchLng(Number(e.target.value))}
              className="border p-1 rounded"
            />
          </label>
          <label>
            Radius (miles):{" "}
            <input
              type="number"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="border p-1 rounded"
            />
          </label>
          <button 
            className="sm:col-span-3 lg:col-span-1" 
            onClick={() => setModalOpen(true)}
          >
            Register New Training Location
          </button>
        </div>

        <h2 
          className="text-2xl font-semibold mt-10 mb-4 cursor-pointer flex justify-center items-center" 
          onClick={() => setShow(prev => ({...prev, private: !prev.private}))}
        >
          <div className="mr-5">San Diego Private Training Locations</div>
          <div>
            {show.private ? <FaEye /> : <FaEyeSlash />}
          </div>
        </h2>

        {show.private && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrivateLocations?.length === 0 ? (
              <p>No Private Training Locations found within selected radius.</p>
            ) : (
              filteredPrivateLocations?.map((loc) => (
                <div
                  key={loc.id+loc.name}
                  className="rounded-xl shadow-lg border overflow-hidden bg-white transition hover:shadow-2xl"
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">{loc.name}</h3>
                    <p className="text-gray-600">{loc.address}</p>
                    <p><span className="font-semibold">Arts:</span> {loc.arts.join(", ")}</p>
                    <p><span className="font-semibold">Open Hours:</span> {loc.hours}</p>
                    <p><span className="font-semibold">Price:</span> {loc.price}</p>
                    <p><span className="font-semibold">Phone:</span> {loc.phone}</p>
                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      <a href={`mailto:${loc.email}`} className="text-blue-600 hover:underline">
                        {loc.email}
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Google Reviews:</span>{" "}
                      <span className="text-yellow-500 font-medium">{loc.reviews} ★</span>
                    </p>
                    <a
                      href={loc.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-blue-600 hover:underline"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        <h2 
          className="text-2xl font-semibold mt-10 mb-4 cursor-pointer flex justify-center items-center" 
          onClick={() => setShow(prev => ({...prev, gyms: !prev.gyms}))}
        >
          <div className="mr-5">San Diego Combat Gyms</div>
          <div>
            {show.gyms ? <FaEye /> : <FaEyeSlash />}
          </div>
        </h2>
        
        {show.gyms && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGymLocations?.length === 0 ? (
              <p>No gyms found within selected radius.</p>
            ) : (
              filteredGymLocations?.map((loc) => (
                <div
                  key={loc.id+loc.name}
                  className="rounded-xl shadow-lg border overflow-hidden bg-white transition hover:shadow-2xl"
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">{loc.name}</h3>
                    <p className="text-gray-600">{loc.address}</p>
                    <p><span className="font-semibold">Arts:</span> {loc.arts.join(", ")}</p>
                    <p><span className="font-semibold">Open Hours:</span> {loc.hours}</p>
                    <p><span className="font-semibold">Phone:</span> {loc.phone}</p>
                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      <a href={`mailto:${loc.email}`} className="text-blue-600 hover:underline">
                        {loc.email}
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Google Reviews:</span>{" "}
                      <span className="text-yellow-500 font-medium">{loc.reviews} ★</span>
                    </p>
                    <a
                      href={loc.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-blue-600 hover:underline"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
                onClick={() => setModalOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-xl font-semibold mb-4">Register a New Location</h2>
              <form 
                onSubmit={e => { 
                  handleNewLocationSubmit(e); 
                  setModalOpen(false); 
                }} 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <input
                  type="text"
                  placeholder="Name"
                  value={newLocation.name}
                  onChange={(e) => setNewLocation({ ...newLocation, name: e.target.value })}
                  className="border w-full p-2 rounded"
                />
                <input
                  type="number"
                  placeholder="Latitude"
                  value={newLocation.lat}
                  onChange={(e) => setNewLocation({ ...newLocation, lat: Number(e.target.value) })}
                  className="border w-full p-2 rounded"
                />
                <input
                  type="number"
                  placeholder="Longitude"
                  value={newLocation.lng}
                  onChange={(e) => setNewLocation({ ...newLocation, lng: Number(e.target.value) })}
                  className="border w-full p-2 rounded"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded col-span-1 md:col-span-2"
                >
                  Submit Location
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Locations;
