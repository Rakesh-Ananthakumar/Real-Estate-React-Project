import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [apiUsers, setApiUsers] = useState([]); // State to hold API users
  const [yourUsername, setYourUsername] = useState(''); // Your username from state
  const [yourPassword, setYourPassword] = useState(''); // Your password from state

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setApiUsers(response.data); // Set API data to state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = () => {
    // Check if your username and password are available in API data
    const foundUser = apiUsers.find(user => user.username === yourUsername && user.password === yourPassword);

    if (foundUser) {
      console.log('Username and password found in API data:', foundUser);
      // Perform actions when username and password are found
    } else {
      console.log('Username and/or password not found in API data.');
      // Perform actions when username and password are not found
    }
  };

  return (
    <div>
      {/* Your component JSX */}
      <input
        type="text"
        placeholder="Username"
        value={yourUsername}
        onChange={(e) => setYourUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={yourPassword}
        onChange={(e) => setYourPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default YourComponent;
