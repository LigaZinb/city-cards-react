import React from 'react';

function CitySelector({ cities, onSelect }) {
  return (
    <div>
      <h2>"City-select":</h2>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">-- Select--</option>
        {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
