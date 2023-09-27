import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const DonationBox = ({ donation }) => {
  const { id, title, category, textColor, cardBg, picture, categoryBg } = donation;

  return (
    <NavLink to={`/donation-details/${id}`}>
      <div style={{ backgroundColor: cardBg }} className={`shadow-xl rounded-lg`}>
        <figure className='rounded'>
          <img src={picture} alt="img" />
        </figure>
        <div className='p-4'>
          <button style={{ backgroundColor: categoryBg, color: textColor }} className={`py-1 px-2 rounded text-sm font-medium`}>
            {category}
          </button>
          <h2 style={{ color: textColor }} className={`text-base font-semibold`}>
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
