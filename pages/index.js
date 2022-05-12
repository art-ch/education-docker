import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log('Placing order');
    router.push('/products');
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default Home;
