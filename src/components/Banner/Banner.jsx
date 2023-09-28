import { useState } from 'react';

const Banner = ({ setSearchCategory }) => {


  const handleSubmited = (e) => {
    e.preventDefault();
    setSearchCategory(e.target.search.value);
    console.log(e.target);
  }

  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-10 mt-4 lg:mt-10 lg:py-20">
      <h2 className="text-[#0B0B0B] font-bold text-2xl md:text-3xl lg:text-5xl">
        I Grow By Helping People In Need
      </h2>
      <form className="join " onSubmit={handleSubmited}>
         <div>
          <div>
          <input name='search'  className="input input-bordered join-item md:w-[350px] bg-white border" placeholder="Search"/>
                                    
           </div>
          </div>
          <div className="indicator">
          <button className="btn join-item bg-[#ff444a] text-white border-none hover:bg-[#ff444a]"><input type="submit" value="Search" /></button>
          </div>
          </form>
    </div>
  );
};

export default Banner;
