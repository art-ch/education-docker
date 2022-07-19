import Head from 'next/head';

const Blog = ({ title, description }) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <h1>Blog</h1>
      <h1>Analytics ID {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h1>
    </>
  );
};

export async function getServerSideProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  console.log(
    `Connecting to database with username ${user} and password ${password}`
  );
  return {
    props: {
      title: 'Article Title',
      description: 'Article Description'
    }
  };
}

export default Blog;
