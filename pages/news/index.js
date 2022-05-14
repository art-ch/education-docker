import React from 'react';

const NewsArticlesList = ({ articles }) => {
  return (
    <>
      <h1>List Of News Articles</h1>
      {articles.map((article) => (
        <article key={article.id}>
          <h1>
            {article.title} / {article.category}
          </h1>
        </article>
      ))}
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();

  return {
    props: {
      articles: data
    }
  };
}

export default NewsArticlesList;
