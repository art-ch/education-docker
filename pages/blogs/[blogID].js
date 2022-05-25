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

// SSR cannot be used
export async function getStaticProps() {
  return {
    props: {
      title: 'Article Title',
      description: 'Article Description'
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { blogID: '1' } }],
    // fallback has to be false
    fallback: false
  };
}

export default Blog;
