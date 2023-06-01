import React, { useRef } from 'react'
import userImg from "../static/images/user.png"
import { Divider } from '@mui/material';
// import phoneCodes from '../phoneCodes'

const ProfileForm = () => {
  const phoneCodes = [
    { country: 'India', code: '+91' },
    { country: 'United States', code: '+1' },
    { country: 'United Kingdom', code: '+44' },
  ];

  const imageInputRef = useRef(null);

    const handleImageClick = () => {
    imageInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
  };

  return (

    <div class="signup-container">
    <form>
        <div className="profile-header-section-row">
            <div className="profile-left-content">

              <input
              type="file"
              accept="image/*"
              required
              style={{ display: 'none' }}
              ref={imageInputRef}
              onChange={handleImageUpload}
            />
            <img
              src={userImg}
              alt=""
              onClick={handleImageClick}
              style={{ cursor: 'pointer' }}
            />
                
                
                {/* <h3 className="profile-name">Name</h3> */}
            </div>
            <div className="profile-right-content">
                <div class="form-group">
                    <h2>Full Name</h2>
                    <input type="text" id="full-name" required />
                    <label for="full-name">Full Name</label>
                </div>
                <div class="form-group">
                <h2>Place</h2>
                    <input type="text" id="place" required />
                    <label for="place">Place</label>
                </div>
            </div>
        </div>
        
        <div className="form-group">
            <h2>Phone Number</h2>
            <div className="phone-input">
              <select>
                {phoneCodes.map((phoneCode, index) => (
                  <option key={index} value={phoneCode.code}>
                    {phoneCode.code} {phoneCode.country} 
                  </option>
                ))}
              </select>
              <input type="number" required />
              <label class="phone-label" htmlFor="phoneNumber" id='phone-number-label'>Phone Number</label>
            </div>
          </div>


      <div class="form-group">
      <h2>Email</h2>
        <input type="text" id="email" required />
        <label for="email">Email</label>
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
  )
}

export default ProfileForm