import { useNavigate } from "react-router-dom";

const ErrorMessage = () => {
    const navigate = useNavigate();

    return (
        <div className="text-7xl flex flex-col justify-center items-center gap-10 mt-40">
            <p className="text-[#FF444A]">404!</p> 
            <p>Page Not Found</p>
            <button onClick={()=>{
                      navigate("/");
            }} className="btn bg-[#FF444A] text-white text-base font-semibold rounded-lg">Go back to home page</button>
        </div>
    );
};

export default ErrorMessage;