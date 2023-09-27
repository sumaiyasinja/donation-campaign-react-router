import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { getStoredDonations } from "../../utility/localstorage";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {displayedDonations.map((donation) => (
            <div
              key={donation.id}
              className="bg-gray-200 rounded-lg shadow-md p-4"
            >
              <img
                src={donation.picture}
                alt={donation.title}
                className="w-full h-auto"
              />
              <div className="bg-blue-500 text-white px-2 py-1 rounded-full inline-block mt-2">
                {donation.category}
              </div>
              <h2 className="text-xl font-semibold mt-2">{donation.title}</h2>
              <p className="text-gray-600">{donation.price}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4">
                View Details
              </button>
            </div>
          ))}
        </div>
        {donations.length > 4 && (
          <div className="text-center mt-6">
            <button
              className="bg-yellow-500 text-white py-2 px-4 rounded-full"
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
