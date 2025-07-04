import React, { useState } from 'react';
import CitySelector from './components/CitySelector';
import CityCard from './components/CityCard';
import citiesData from './cities';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (cityName) => {
    const city = citiesData.find((c) => c.name === cityName);
    setSelectedCity(city);
  };

  return (
    <div className="App">
      <CitySelector cities={citiesData} onSelect={handleCitySelect} />
      <CityCard city={selectedCity} />
    </div>
  );
}

export default App;

