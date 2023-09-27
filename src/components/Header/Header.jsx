import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";

const Header = () => {
    return (
        <div className="relative  mb-96 md:mb-0 "> 
        <img className="" src="https://i.ibb.co/t4W01dL/Rectangle4281.png" alt="" />
        <div className="absolute top-0 h-full w-full bg-[#FFFFFFE1] ">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
        </div>
    );
};

export default Header;