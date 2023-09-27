const getStoredDonations = () =>{
    const StoredDonations = localStorage.getItem('donation-info');
    if(StoredDonations){
        return JSON.parse(StoredDonations);
    }
    return [];
}


const saveJDonationInfo = id =>{
    const StoredDonations = getStoredDonations();
    const exists = StoredDonations.find(DonationId => DonationId == id);
    if(!exists){
        StoredDonations.push(id);
        localStorage.setItem('donation-info', JSON.stringify(StoredDonations))
    }
}

export { getStoredDonations, saveJDonationInfo}