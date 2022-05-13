import Link from 'next/dist/client/link';

const PostList = ({ posts }) => {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map(({ id, title }) => (
        <div key={id}>
          <Link href={`/posts/${id}`}>
            <a>
              <h2>
                {id} {title}
              </h2>
            </a>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      posts: data
    }
  };
}

export default PostList;
