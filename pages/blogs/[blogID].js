import Head from 'next/head';

const Blog = ({ title, description }) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <h1>Blog</h1>
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      title: 'Article Title',
      description: 'Article Description'
    }
  };
}

export default Blog;
