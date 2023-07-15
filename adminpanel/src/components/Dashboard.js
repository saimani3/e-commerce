import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Dashboard = () => {
  // const [totalOrders, setTotalOrders] = useState(0);
  // const [totalRevenue, setTotalRevenue] = useState(0);
  // const [totalUsers, setTotalUsers] = useState(0);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     // Fetch data from the server
  //     const response = await axios.get('/api/dashboard');

  //     // Update state with the fetched data
  //     setTotalOrders(response.data.totalOrders);
  //     setTotalRevenue(response.data.totalRevenue);
  //     setTotalUsers(response.data.totalUsers);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="statistics">
        <div className="statistic">
          <h2>Total Orders</h2>
          {/* <p>{totalOrders}</p> */}
        </div>

        <div className="statistic">
          <h2>Total Revenue</h2>
          {/* <p>${totalRevenue}</p> */}
        </div>

        <div className="statistic">
          <h2>Total Users</h2>
          {/* <p>{totalUsers}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
