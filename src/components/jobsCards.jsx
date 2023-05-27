import React, { useState } from 'react';
import { FaRegBookmark} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export function JobCard(props) {
  console.log(props)

  const [isSaved, setIsSaved] = useState(false);

  const handleBookmarkClick = () => {
    setIsSaved(!isSaved);
    props.onSaveCard(props); // Pass the card details to the parent component
  };

    const navigate = useNavigate()
    const navigatetoJobDetails = () => {
        navigate('/job-details', { state: { jobProps: props } }); 
      };
      
    const navigatetoTagsPage = () => {
        navigate('/tags'); 
      };

    const customClassName = props.work_type;
  return (
    <div className='jobList'>
      <div key={props.id} className={`${customClassName} jobCard`} >
        <div className='jobCard__content'>
          <div className='jobCard__header' onClick={navigatetoJobDetails}>
            <img src={props.image} alt='job-img' className='jobImage' />
            <h3 className='jobName '>{props.job_title}</h3>
            <FaRegBookmark className={`jobCard__wishlist ${isSaved ? 'saved' : ''}`} onClick={handleBookmarkClick} />
          </div>
          <h3 className='jobCompany'>{props.company}</h3>
          <div className='displayStack__1'>
            <div className='tagsContainer'>
              {props.tags.map((tag, index) => (
                <span key={index} className='tagItem' onClick={navigatetoTagsPage}>{tag}</span>
              ))}
            </div>
            <div className='displayStack__2'>
              <div className='jobview' onClick={navigatetoJobDetails}>{props.view}</div>
              <div className='jobview' onClick={navigatetoJobDetails}>{props.share}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
