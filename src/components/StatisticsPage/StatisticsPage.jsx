import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useLoaderData } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import { getStoredDonations, saveJDonationInfo } from "../../utility/localstorage";

const StatisticsPage = () => {
  const donations = useLoaderData();
  const totalDonations = donations.length;
  const givenDonation = getStoredDonations();
  const percentage = (givenDonation.length / totalDonations) * 100;

  // Data for the pie chart
  const data = {
    labels: ["Your Donations", "Remaining Donations"],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#FF6B6B", "#E5E7EB"],
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "bottom",
    },
  };

  // Use a key to force re-rendering of the Pie chart component
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    // Destroy the existing chart when the component unmounts
    return () => {
      const existingChart = document.getElementById("donation-chart");
      if (existingChart) {
        existingChart.getContext("2d").clearRect(0, 0, existingChart.width, existingChart.height);
      }
    };
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <h2>Donations Statistics</h2>
      <p>Your donations: {givenDonation.length}</p>
      <p>Total donations: {totalDonations}</p>
      <div className="pie-chart-container">
        <Pie
          key={chartKey}
          id="donation-chart"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default StatisticsPage;
