import React, { useState } from 'react';

const SelectOptionsExample = () => {
  // State to store the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Array of options
  const options = [
    { value: 'Thin', label: 'Thin' },
    { value: 'Thick', label: 'Thick' },
    { value: 'Cheese', label: 'Cheese' },
    // Add more options here as needed
  ];

  // Event handler for when an option is selected
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2 style={{color:"red"}}>Select a Crust:</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedOption && <p style={{color:"red"}}><b>You selected: {selectedOption}</b></p>}
    </div>
  );
};

export default SelectOptionsExample;
