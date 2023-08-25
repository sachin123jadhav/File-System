import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  // Add more options as needed
];

function MultiSelectDropdown() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div>
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleOptionChange}
      />
      <div>
        Selected Options:
        <ul>
          {selectedOptions.map((option) => (
            <li key={option.value}>{option.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MultiSelectDropdown;
