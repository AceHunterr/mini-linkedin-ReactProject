import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';

const JobDetail = () => {
  return (
    <Box sx={{display:"flex"}}> 
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>

    {/* <div>
      <h1>Heading</h1>
      <div style={{ backgroundColor: '#eef', position: 'relative' }}>
        <img
          src="path_to_your_image.jpg"
          alt="Developer"
          style={{ transform: 'translateY(-6px)', width: '20%' }}
        />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>Item 1</div>
          <div style={{ flex: 1 }}>Item 2</div>
          <div style={{ flex: 1 }}>Item 3</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>•</div>
          <div>•</div>
        </div>
      </div>
      <div style={{ margin: '20px 0', padding: '10px', backgroundColor: '#eee' }}>
        Description
      </div>
    </div>
 */}
    <div className="job-detail-card">
      <div className="imgbox">
        <img src="data:image/jpeg;base64,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" alt="Logo"  />

      </div>

      <div className="content">
        <h2>Keep Smiling</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In excepturi soluta ut, nisi beatae sint. Quia id odio doloribus maxime rerum placeat laborum omnis excepturi repellendus, perferendis, dolore, maiores enim?</p>
      </div>
      
    </div>



    </Box>
    </Box>
  )
}

export default JobDetail