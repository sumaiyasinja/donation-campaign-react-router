import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { getStoredDonations } from "../../utility/localstorage";
import { NavLink } from 'react-router-dom';


const DonatedItems = () => {
  const [showAll, setShowAll] = useState(false);
  const donations = getStoredDonations(); 

  // Function to toggle showing all donations
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Filter the donations to show only the first 4 or all if showAll is true
  const displayedDonations = showAll ? donations : donations.slice(0, 4);

  return (
    <div>
      <Navbar />
      <div className="py-6 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-3">
          {displayedDonations.map((donation) => (
           
           <div
              key={donation.id} 
              className="card card-side shadow-md rounded"
            >
               <figure className="rounded-none ">
               <img
                src={donation.picture}
                alt={donation.title}
                className="w-full h-full rounded-none rounded-l"
              />
               </figure>
             
              <div style={{ backgroundColor: donation.cardBg }} className="p-4 w-full h-auto space-y-3 ">
              <div style={{ backgroundColor: donation.categoryBg, color: donation.textColor }} className="rounded inline-block px-2 py-1 ">
                {donation.category}
              </div>
              <h2 className="text-xl font-semibold">{donation.title}</h2>
              <p style={{ color: donation.textColor }} className="pb-2 text-xl font-semibold">{donation.price}</p>
              <NavLink to={`/donation-details/${donation.id}`}>
              <button style={{ backgroundColor: donation.textColor }} className="text-white py-2 px-4 rounded">
                View Details
              </button>
              </NavLink>
              </div>

            </div>
          ))}
        </div>
        {donations.length > 4 && (
          <div className={`text-center mt-6 ${showAll ? "hidden" : ""}`}>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-lg"
              onClick={toggleShowAll}
            >
              {showAll ? "Show Less" : "See All"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonatedItems;
