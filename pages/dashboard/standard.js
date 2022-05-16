import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch('http://localhost:4000/dashboard');
      const data = await response.json();

      setDashboardData(data);
      setIsLoading(false);
    };

    fetchDashboardData();
  }, []);

  isLoading && <h2>Loading...</h2>;

  const { posts, likes, followers, following } = dashboardData;

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {posts}</h2>
      <h2>Likes - {likes}</h2>
      <h2>Followers - {followers}</h2>
      <h2>Following - {following}</h2>
    </div>
  );
};

export default Dashboard;
