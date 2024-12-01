import React, { useState } from "react";

const City = () => {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState(null);
  const [error, setError] = useState(null);

  const handleCitySearch = async () => {
    if (!city) return;

    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/city?name=${city}`, {
        method: "GET",
        headers: {
          "X-Api-Key": "YOUR_API_KEY", // Replace with your actual API key
        },
      });

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setCityData(data[0] || null); // Assuming the first result is the desired one
      setError(null); // Reset error
    } catch (err) {
      setError(err.message); // Set error if no data or issue occurred
      setCityData(null); // Reset city data
    }
  };

  return (
    <div className="city-container">
      <h2>City Search</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="city-input"
        style={{ color: "black" }} // Ensures typed text is black
      />
      <button className="search-button" onClick={handleCitySearch}>
        Search
      </button>

      {error && <div className="error-message">{error}</div>}

      {cityData && (
        <div className="city-info">
          <div className="city-details">
            <p><strong>City:</strong> {cityData.name}</p>
            <p><strong>State:</strong> {cityData.state}</p>
            <p><strong>Country:</strong> {cityData.country}</p>
            <p><strong>Latitude:</strong> {cityData.latitude}</p>
            <p><strong>Longitude:</strong> {cityData.longitude}</p>
          </div>
        </div>
      )}

      {!cityData && !error && <div className="error-message">No information available for this city.</div>}
    </div>
  );
};

export default City;
