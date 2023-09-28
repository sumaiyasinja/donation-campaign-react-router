import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';
import { getStoredDonations } from "../../utility/localstorage";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from 'react-router-dom';


const COLORS = ['#FF444A', '#00C49F'];

export default function StatisticsPage() {
  const givenDonation = getStoredDonations();
  const donationsData =useLoaderData();

    console.log(givenDonation);
  const data = [
    { name: 'Total Donation', value: donationsData?.length - givenDonation?.length },
    { name: 'Your Donation', value: givenDonation?.length },
  ];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        fontSize="16" 
        fontWeight="bold" 
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <Navbar></Navbar>
    
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={140}
          fill="#8884d8"
          dataKey="value"
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          iconSize={30} 
          wrapperStyle={{
            fontSize: '16px', 
            fontWeight: 'bold', 
            padding: '10px', 
          }}
        />
      </PieChart>
    </ResponsiveContainer>

    </div>
  );
}
