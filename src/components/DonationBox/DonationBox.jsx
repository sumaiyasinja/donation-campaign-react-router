import PropTypes from 'prop-types';
import {  NavLink } from 'react-router-dom';

const DonationBox = ({donation}) => {
   
  const {id,title,category,textColor,cardBgColor,picture,category_bg} =donation

    return (
      <NavLink to={`/donation-details/${id}`}>
        <div  className={`bg-${cardBgColor} shadow-xl rounded-lg`}>
          <figure className='rounded'>
            <img src={picture} alt="img" />
          </figure>
          <div className='p-4'> 
            <button className={` text-sm font-medium text-[${category_bg}] text-${textColor}`}>
              {category}
            </button>
              <h2 className={`text-base font-semibold text-${textColor}`}>
              {title}
              </h2>
          </div>
      </div>
      </NavLink>
    );
  };
  

  DonationBox.propTypes = {
    donation: PropTypes.object
  };

  export default DonationBox;