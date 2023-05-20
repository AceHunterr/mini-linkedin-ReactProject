import React from 'react'

const SignUpForm = () => {
  return (
    <>
  <div class="signup-container">
    <span>Sign Up</span>
    <form>
      <div class="form-group">
        <input type="text" id="email" required />
        <label for="email">Email</label>
      </div>
      <div class="form-group">
        <input type="text" id="name" required />
        <label for="name">Name</label>
      </div>
      <div class="form-group">
        <input type="password" id="password" required />
        <label for="password">Password</label>
      </div>
      <div class="form-group">
        <input type="password" id="confirm-password" required />
        <label for="confirm-password">Confirm Password</label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
    <p>Already have an account? <a href="/">Login</a></p>
  </div>
  
      </>
  )
}

export default SignUpForm