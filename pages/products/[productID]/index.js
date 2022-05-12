import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const productID = router.query.productID;

  return <h1>Details about product {productID}</h1>;
};

export default ProductDetail;
