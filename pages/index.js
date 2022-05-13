import Link from 'next/link';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">Posts</Link>
    </>
  );
};

export default Home;
