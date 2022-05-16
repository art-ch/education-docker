import useSWR from 'swr';

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard');
  const data = await response.json();

  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR('dashboard', fetcher);

  if (error) return <h2>There was an error</h2>;
  if (!data) return <h2>Loading...</h2>;

  const { posts, likes, followers, following } = data;

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

export default DashboardSWR;
