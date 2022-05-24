import Head from 'next/head';
import Footer from '../components/layout/Footer';

const About = () => {
  return (
    <>
      <Head>
        <meta name="description" content="About" />
        <title>About</title>
      </Head>
      <h1 className="content">About</h1>
    </>
  );
};

About.getLayout = function pageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

export default About;
