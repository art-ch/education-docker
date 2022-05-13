import { useRouter } from 'next/router';

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>
        {product.id} {product.title}
      </h2>
      <h3>{product.price}</h3>
      <p>{product.description}</p>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `http://localhost:4000/products/${params.productID}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true
    };
  }

  console.log(`Generating page for /products/${params.productID}`);

  return {
    props: {
      product: data
    },
    revalidate: 10
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productID: '1' }
      }
    ],
    fallback: true
  };
}

export default Product;
