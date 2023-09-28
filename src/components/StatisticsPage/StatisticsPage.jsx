import { PieChart, Pie } from 'recharts';
import Navbar from "../Navbar/Navbar";
import { getStoredDonations } from "../../utility/localstorage";
import { useLoaderData } from 'react-router-dom';

const StatisticsPage = () => {
  const totalDonations = useLoaderData().length;
  const givenDonation = getStoredDonations().length;
  const percentageOfDonation = ((givenDonation / totalDonations) * 100).toFixed(2);
  const remaningPercentage = 100 - percentageOfDonation;

  console.log(totalDonations);

  // Sample data
  const data = [
    { value: totalDonations, fill: '#FF444A', percentage: (100- (givenDonation / totalDonations * 100)).toFixed(2) },
    { value: givenDonation, fill: '#00C49F',  percentage: percentageOfDonation },
  ];


  const datalabel = { visible: true, position: 'Inside', name: 'text' };
  const tooltip = { enable: true };
  const tooltipRender = (args) => {
      let value = args.point.y / args.series.sumOfPoints * 100;
      args.text = args.point.x + '' + Math.ceil(value) + '' + '%';
  };
  
  return (
    <div className='p-2 className="color:0B0B0B"'>
      <Navbar></Navbar>
      <PieChart width={400} height={400} className='mx-auto'>
        <Pie
          data={data}
          strokeWidth={3}
          dataKey="value"
          outerRadius={200}
          fill="fill"
          label={({ percentage }) => {
            return percentage + '%';
          }}
          labelStyle={{
            fontSize: 16,
            color: 'white',
            position: 'inside',
          }}
        />
      </PieChart>
      <div className="flex justify-around">
        <div className='flex gap-2'>
          <p className="text-[#0B0B0B]">Your Donation</p>
          <p className='bg-[#00C49F] text-white rounded-sm px-20 py-1'></p>
        </div>
        <div className='flex gap-2'>
          <p className="text-[#0B0B0B]">Total Donation</p>
          <p className='bg-[#FF444A] text-white rounded-sm px-20 py-1'></p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
