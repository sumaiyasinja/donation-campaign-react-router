import { useParams,useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "../Navbar/Navbar";
import {saveJDonationInfo} from '../../utility/localstorage.js';

import 'react-toastify/dist/ReactToastify.css';


const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const donation = donations.find(donation => donation.id == id);


    const donated = () => {
        saveJDonationInfo(donation);
        toast.success("Doanted!")
    };

    console.log(donation,id);
    return (
        <div className='container mx-auto'> 
        <Navbar></Navbar>
        <ToastContainer></ToastContainer>
        <div className='relative'>
        <img className='rounded-lg mx-auto w-full' src={donation.picture} alt="" />
        
        <div className='absolute bottom-0 left-0 right-0 '>
            {/* Overlay */}
            <div className='bg-[#0B0B0B80] h-20 rounded-lg absolute inset-x-0 bottom-0'></div>
            <buttons onClick={donated} className='cursor-pointer absolute mx-10 bg-red-500 text-white py-3 px-6 rounded-lg z-10 bottom-4'>
            Donate {donation.price}
            </buttons>
        </div>
        </div>

            <p className=' text-[#0B0B0B] font-bold text-4xl mb-6 mt-12'>{donation.title}</p>
            <p className=' font-normal text-base text-[#0B0B0BB2]'>{donation.description}</p>
        </div>

    );
};


export default DonationDetails;