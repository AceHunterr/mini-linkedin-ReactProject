import React, { useState } from 'react';
import { FaRegBookmark} from 'react-icons/fa';
import { useNavigate,Link } from 'react-router-dom';

export function JobCard(props) {
  // console.log(props) 

  // const [isSaved, setIsSaved] = useState(false);

  // const handleBookmarkClick = () => {
  //   setIsSaved(!isSaved);
  //   props.onSaveCard(props); 
  // };

  //   const navigate = useNavigate()
  //   // const history = useHistory()
  //   console.log("Here")
  //   console.log(props)
  //   const navigatetoJobDetails = () => {
  //     // navigate(`/job-details?id=${props.id}&job_title=${encodeURIComponent(props.job_title)}&company=${encodeURIComponent(props.company)}&work_type=${encodeURIComponent(props.work_type)}`); 
  //     // navigate('/job-details', { state: { jobProps: props } });
  //     navigate('/job-details', { state: { jobProps: { props } } });

  //     // history.push('/job-details', { jobProps: props });

  //   };
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
          </div>
            {/* <FaRegBookmark className={`jobCard__wishlist ${isSaved ? 'saved' : ''}`} onClick={handleBookmarkClick} /> */}
            <FaRegBookmark className='jobCard__wishlist' />
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
