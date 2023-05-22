import React, { useState } from 'react';
import './as1.css'

const AutoCompleteSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    try {
      const response = await fetch('http://cdn-api.co-vin.in/api/v2/admin/location/states');
      const data = await response.json();

      // Filter suggestions based on search
      const filteredSuggestions = data.states.filter((state) =>
        state.state_name.toLowerCase().includes(value.toLowerCase())
      );

      setSuggestions(filteredSuggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchTerm(suggestion.state_name);
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for State Names"
        value={searchTerm}
        onChange={handleChange}
      />
      {suggestions.length > 0 && (
        <ul className="autocomplete-dropdown">
          {suggestions.map((suggestion) => (
            <li key={suggestion.state_id} onClick={() => handleSelectSuggestion(suggestion)}>
              {suggestion.state_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteSearchBar;
