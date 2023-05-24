import React from 'react'

const LoginUpForm = () => {
  return (
    <>
  <div class="signup-container">
    <span>Login</span>
    <form>
      <div class="form-group">
        <h2>Email</h2>
        <input type="text" id="email" required />
        <label for="email">Email</label>
      </div>

      <div class="form-group">
      <h2>Password</h2>
        <input type="password" id="password" required />
        <label for="password">Password</label>
      </div>

      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <a href="/">Sign Up</a></p>
  </div>
  
      </>
  )
}

export default LoginUpForm