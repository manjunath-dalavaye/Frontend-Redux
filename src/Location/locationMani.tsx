import React, { useState } from 'react';
import useGeolocation from './locCustom';

const LocationTracker: React.FC = () => {
  const { position, error, loading } = useGeolocation();
  const [showLocation, setShowLocation] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!position) return <p>No location data available.</p>;

  const { latitude, longitude } = position.coords;
  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  const handleShowLocation = () => {
    setShowLocation(true);
  };

  return (
    <div>
      <h1>Location Tracker</h1>
      <button onClick={handleShowLocation}>Show Location on Map</button>
      {showLocation && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>
      )}
    </div>
  );
};

export default LocationTracker;
