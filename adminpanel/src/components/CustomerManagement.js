import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from the server
      const response = await axios.get('/api/customers');

      // Update state with the fetched data
      setCustomers(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (customerId) => {
    try {
      // Delete the customer on the server
      await axios.delete(`/api/customers/${customerId}`);

      // Remove the customer from the state
      setCustomers(customers.filter((customer) => customer.id !== customerId));
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="customer-management">
      <h1>Customer Management</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>
                <button onClick={() => handleDelete(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerManagement;