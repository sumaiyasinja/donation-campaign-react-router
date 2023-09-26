
const Banner = () => {
    return (
        <div className=" container mx-auto flex flex-col justify-center items-center gap-10 mt-10 py-20">
            <h2 className="text-[#0B0B0B] font-bold text-5xl">
            I Grow By Helping People In Need
            </h2>
            <div className="flex ">
            <input type="text" placeholder="Type here" className="p-3 px-8 w-full max-w-2xl rounded-l-lg" />
            <button className="bg-[#FF444A] text-white p-3 rounded-r-lg text-base font-semibold">Search</button>

            </div>
        </div>
    );
};

export default Banner;