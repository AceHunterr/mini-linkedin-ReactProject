import React from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles({
//     profileFooterBtn: {
//       padding: '0.5% 2% 0.5%',
//       backgroundColor: 'var(--color-secondary-black)',
//       color: 'var(--color-grey)',
//       cursor: 'pointer',
//       backgroundOrigin: 'border-box',
//       textDecoration: 'none',
//       borderRadius: '6px',
//       fontSize: '18px',
//       border: 'solid var(--color-secondary-black) 3px'
//     },
//   });

const ProfileFormBtns = () => { 
    // const classes = useStyles();

  return (
    <div>
    
        <div className='profile-btn-row'>
            <button className='profile-footer-btn' ><BookmarkBorderIcon fontSize="small" />Saved</button>
            <button className='profile-footer-btn' >Contact Us</button>
            <button className='profile-footer-btn' id='logout-btn'><LogoutIcon fontSize='small' sx={{ color: 'red' }}/> LogOut</button>

            {/* <Button classes={{ root: classes.profileFooterBtn }} variant="contained" startIcon={<BookmarkBorderIcon />}>
  Saved
</Button> */}
            {/* <button>Contact Us</button>
            <button>LogOut</button> */}
        </div>
    </div>
  )
}

export default ProfileFormBtns