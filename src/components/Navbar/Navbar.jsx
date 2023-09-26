import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar container mx-auto">
        <div className="flex-1">
          <div>

            <img src="https://i.ibb.co/9Ydckjy/Group.png" alt="" />
          </div>
          <div className="flex flex-col">
            <a className="text-[#FF444A] font-bold text-2xl">Donation</a>
            <p className="text-indigo-900 bg-opacity-70">Campaign</p>
          </div>
        </div>
        <div className="flex-none">
          <ul className="flex text-lg px-1 text-indigo-900 bg-opacity-70 gap-10">
            <NavLink className={({ isActive }) => (isActive ? 'text-[#FF444A] underline' : '')}   to="/">Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'text-[#FF444A] underline' : '')}  to="/donation">Donation</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'text-[#FF444A] underline' : '')} to="/statistics">Statistics</NavLink>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;