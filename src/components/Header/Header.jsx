import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";

const Header = () => {
    return (
        <div style={{backgroundImage: "url(https://i.ibb.co/t4W01dL/Rectangle4281.png)",
        backgroundColor: "rgba(255, 255, 255, 0.2)"
        }}>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;