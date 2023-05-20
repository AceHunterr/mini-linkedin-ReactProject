import { FaRegBookmark} from 'react-icons/fa';

export function JobCard(props) {
  return (
    <div className='jobList'>
      <div key={props.id} className='jobCard'>
        <div className='jobCard__content'>
          <div className='jobCard__header'>
            <img src={props.image} alt='job-img' className='jobImage' />
            <h3 className='jobName'>{props.job_title}</h3>
            <FaRegBookmark className='jobCard__wishlist' />
          </div>
          <h3>{props.company}</h3>
          <div className='displayStack__1'>
            <div className='tagsContainer'>
              {props.tags.map((tag, index) => (
                <span key={index} className='tagItem'>{tag}</span>
              ))}
            </div>
            <div className='displayStack__2'>
              <div className='jobview'><a href='/'>{props.view}</a></div>
              <div className='jobview'><a href='/'>{props.share}</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
