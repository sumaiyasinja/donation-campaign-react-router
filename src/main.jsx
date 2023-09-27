import React from 'react'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import StatisticsPage from './components/StatisticsPage/StatisticsPage'
import DonationBoxs from './components/DonationBoxs/DonationBoxs';
import DonatedItems from './components/DonatedItems/DonatedItems';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import DonationDetails from './components/DonationDetails/DonationDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorMessage></ErrorMessage>,

  },
    {
        path: "/header",
        element: <Header></Header>,
    },
      {
        path: "/donation",
        element: <DonatedItems></DonatedItems>
      },
      {
        path: "/statistics",
        element: <StatisticsPage></StatisticsPage>,
        loader: () => fetch('/donation.json'),
      },
      {
        path: "/donation-details/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/donation.json'),
      },
      {
        path: "/donationlist",
        element: <DonatedItems></DonatedItems>,
        loader: () => fetch('/donation.json'),
      },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
