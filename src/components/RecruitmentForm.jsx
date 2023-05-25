import React from 'react'

const RecruitmentForm = () => {
  return (
    <>
  <div class="signup-container">
    <form>
      <div class="form-group">
        <h2>Company Name</h2>
        <input type="text" required />
        <label for="email">Company Name</label>
      </div>
      <div class="form-group">
        <h2>Job Title</h2>
        <input type="text" required />
        <label for="email">Job Title</label>
      </div>
      <div class="form-group">
        <h2>Position</h2>
        <input type="text" required />
        <label for="email">Position</label>
      </div>
      <div class="form-group">
        <h2>Job Type</h2>
        <input type="text" required />
        <label for="email">Job Type</label>
      </div>
      
      <div class="form-group">
        <h2>Job Description</h2>
        <textarea id="myTextarea" rows="4" cols="100"></textarea>
        <label for="email">Job Description</label>
      </div>
      <div className="form-group">
            <h2>Company Logo</h2>
            <input type="file" id="image" accept="image/*" />
            <label htmlFor="image"></label>
          </div>
      <button type="submit" id='post-button'>Post</button>
    </form>

  </div>
  
      </>

  )
}

export default RecruitmentForm