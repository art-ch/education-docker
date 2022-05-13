import Link from 'next/dist/client/link';

const ProductList = ({ products }) => {
  return (
    <>
      <h1>List of products</h1>
      {products.map(({ id, title, price }) => (
        <div key={id}>
          <Link href={`/products/${id}`}>
            <a>
              <h2>
                {id} {title}
              </h2>
              <h3>{price}</h3>
            </a>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
};

export async function getStaticProps() {
  console.log('generating / regenerating product list');
  const response = await fetch('http://localhost:4000/products');
  const data = await response.json();

  return {
    props: {
      products: data
    },
    revalidate: 10
  };
}

export default ProductList;
