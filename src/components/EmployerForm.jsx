import React from 'react'

const EmployerForm = () => {
    const phoneCodes = [
        { country: 'India', code: '+91' },
        { country: 'United States', code: '+1' },
        { country: 'United Kingdom', code: '+44' },
        // Add more country codes as needed
      ];
      
  return (
    <>
    <div class="signup-container">
      <form>
        <div class="form-group">
          <h2>Full Name</h2>
          <input type="text" required />
          <label for="email">Full Name</label>
        </div>
        <div class="form-group">
          <h2>Designation</h2>
          <input type="text" required />
          <label for="email">Designation</label>
        </div>
        <div class="form-group">
          <h2>Company Name</h2>
          <input type="text" required />
          <label for="email">Company Name</label>
        </div>
        <div class="form-group">
          <h2>Email</h2>
          <input type="text" required />
          <label for="email">Email</label>
        </div>



        {/* <div class="form-group">
          <h2>Phone Number</h2>
          <input type="text" required />
          <label for="email">Phone Number</label>
        </div> */}
        

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
              <input type="text" required />
              <label class="phone-label" htmlFor="phoneNumber" id='phone-number-label'>Phone Number</label>
            </div>
          </div>

        
        <button type="submit" id='post-button'>Post</button>
      </form>
  
    </div>
    
    </>
  
  )
}

export default EmployerForm