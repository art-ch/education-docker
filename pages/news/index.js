const News = ({ data }) => {
  return <h1 className="content">{data}</h1>;
};

export async function getStaticProps(context) {
  console.log('running getStaticProps');
  return {
    props: {
      data: context.preview
        ? 'List of draft articles'
        : 'List of published articles'
    }
  };
}

export default News;
