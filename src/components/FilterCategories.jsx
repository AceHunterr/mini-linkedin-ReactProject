import React, { useState } from 'react';

const FilterCategories = ({ onFilter }) => {
  const initialFilterValues = {
    jobTitle: '',
    company: '',
    location: '',
  };

  const [filterValues, setFilterValues] = useState(initialFilterValues);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFilter = () => {
    onFilter(filterValues);
    setIsOpen(true);
  };

  const handleReset = () => {
    setFilterValues(initialFilterValues);
    onFilter(initialFilterValues);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Filter Categories</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Filter Categories</h2>
            <div>
              <label>
                Job Title:
                <input
                  type="text"
                  name="jobTitle"
                  value={filterValues.jobTitle}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Company:
                <input
                  type="text"
                  name="company"
                  value={filterValues.company}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Location:
                <input
                  type="text"
                  name="location"
                  value={filterValues.location}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button onClick={handleFilter}>Apply Filters</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterCategories;
