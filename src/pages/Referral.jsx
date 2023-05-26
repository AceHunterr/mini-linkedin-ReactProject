import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../components/sidenav';
import { ReactComponent as ReferralSvg } from '../static/images/referral.svg';
import coinImg from "../static/images/coin.png";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Referral = () => {
  const referralLinkRef = useRef(null);
  const [referralLinkText, setReferralLinkText] = useState("Your referral link");

  const handleCopyClick = () => {
    if (referralLinkRef.current) {
      referralLinkRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Add your home page content here */}

        <div className="job-detail-header-div">
          <h2 className="job-detail-heading" id="earn-free-coin-text">Earn Free Coins</h2>
        </div>
        <div className="referral-container">
          <ReferralSvg />
        </div>
        <div className='referral-content'>
          <div className="left-content">
            <h2>Get 20 coin</h2>
            <h4>For every new user you refer</h4>
          </div>
          <div className="right-content">
            <img src={coinImg} alt="" />
            <p>120</p>
          </div>
        </div>

        <div className="referral-input-row">
          <div className="referral-input-container">
            <div className="copy-container" onClick={handleCopyClick}>
              <ContentCopyIcon />
            </div>
            <div className="referral-input-wrapper">
              <input
                ref={referralLinkRef}
                type="text"
                value={referralLinkText}
                onClick={handleCopyClick}
                readOnly
              />
              <p>Share</p>
            </div>
          </div>
        </div>

        <div className='referral-input-paragraph '>
          <p>Share your referral link and earn 20 coins</p>
        </div>

        <hr className='divider-line' />

      </Box>
    </Box>
  );
};

export default Referral;
