import DonationBoxs from '../DonationBoxs/DonationBoxs';
import Header from '../Header/Header';
import { useState } from 'react';


const Home = () => {
    const [searchCategory, setSearchCategory] = useState("");
    console.log(searchCategory);
    return (
        <div >
            <Header setSearchCategory={setSearchCategory}></Header>
            <DonationBoxs searchCategory={searchCategory}></DonationBoxs>
        </div>
    );
};

export default Home;