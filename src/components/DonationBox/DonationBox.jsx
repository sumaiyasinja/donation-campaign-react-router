
const DonationBox = (donation) => {
    console.log(donation)
    return (
        <div className={`card bg-${donation.donation.card_bg_color} shadow-xl`}>
        <figure><img src={donation.donation.picture} alt="img" /></figure>
        <button className={`text-[${donation.donation.button_bg_color}] text-${donation.donation.text_color}`}>{donation.donation.category}</button>
        <div className="card-body flex flex-col">
          <h2 className={`card-title text-${donation.donation.text_color}`}>{donation.donation.title}</h2>
        </div>
      </div>
    );
};

export default DonationBox;