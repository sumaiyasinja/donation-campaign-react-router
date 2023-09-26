import { useEffect,useState } from "react";
import DonationBox from '../DonationBox/DonationBox';

const DonationBoxs = () => {
    const [donations, setDonations] = useState([]);
   useEffect( () =>{
       fetch('donation.json')
       .then(res => res.json())
       .then(data => setDonations(data))
   } ,[])

    return (

        <div className="container mx-auto mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            donations.map( donation => <DonationBox key={donation.id} donation={donation}></DonationBox>)
        }
        </div>
    );
};

export default DonationBoxs;