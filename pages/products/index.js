import Link from 'next/dist/client/link';

const ProductList = ({ productID = 100 }) => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h2>
        <Link href="/products/1">
          <a>Product 1</a>
        </Link>
      </h2>
      <h2>
        <Link href="/products/2">
          <a>Product 2</a>
        </Link>
      </h2>
      <h2>
        <Link href="/products/3" replace>
          <a>Product 3</a>
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productID}`}>
          <a>Product {productID}</a>
        </Link>
      </h2>
    </>
  );
};

export default ProductList;
