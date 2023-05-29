import React, { useState } from 'react';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const FilterCategories = ({ onFilter }) => {
  const initialFilterValues = {
    jobTitle: '',
    company: '',
    location: '',
    tags:'',
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
    <div className="filter-btn-row">
      <button onClick={togglePopup} className='profile-footer-btn'><DensityMediumIcon fontSize="small"/>Filter</button>
    </div>
      {isOpen && (
        <div className="filter-popup">
          <div className="filter-popup-content">
            
            <div>
              
              <h2>Opputunity Type</h2>
                <input
                  type="text"
                  name="jobTitle"
                  value={filterValues.jobTitle}
                  onChange={handleChange}
                />
              
            </div>
            <div>
              <h2>Workplace</h2>
                
                <input
                  type="text"
                  name="company"
                  value={filterValues.company}
                  onChange={handleChange}
                />
              
            </div>
            <div>
              <h2>Location</h2>
                <input
                  type="text"
                  name="location"
                  value={filterValues.location}
                  onChange={handleChange}
                />
            </div>
            <div>
              <h2>Domain</h2>
              <input
                type="text"
                name="tags"
                value={filterValues.tags}
                onChange={handleChange}
              />
            </div>
            <div className="filter-options-btns-row">
            <button onClick={handleFilter} className='filter-option-btn'>Apply Filters</button>
            <button onClick={handleReset} className='filter-option-btn'>Reset</button>
            <button onClick={togglePopup} className='filter-option-btn'>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterCategories;
