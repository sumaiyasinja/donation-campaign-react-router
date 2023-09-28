import { useEffect, useState } from "react";
import DonationBox from '../DonationBox/DonationBox';
import Banner from '../Banner/Banner'; // Import the Banner component

const DonationBoxs = () => {
  const [donations, setDonations] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");

  useEffect(() => {
    fetch('donation.json')
      .then(res => res.json())
      .then(data => {
        setDonations(data);
      });
  }, []);

  const handleSearch = (category) => {
    setSearchCategory(category);
  }

  // Filter donations based on the search category
  const filteredDonations = donations.filter(donation => {
    return searchCategory === "" || donation.category.toLowerCase() === searchCategory.toLowerCase();
  });

  return (
    <div>
      <Banner onSearch={handleSearch} />
      <div className="w-[90%] mx-auto mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDonations.map(donation => (
          <DonationBox key={donation.id} donation={donation}></DonationBox>
        ))}
      </div>
    </div>
  );
};

export default DonationBoxs;
