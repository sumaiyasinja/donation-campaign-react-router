import React from 'react'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import PieChart from './components/PieChart/PieChart'
import DonationBoxs from './components/DonationBoxs/DonationBoxs';
import DonatedItems from './components/DonatedItems/DonatedItems';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

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
        element: <PieChart></PieChart>,
      },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
