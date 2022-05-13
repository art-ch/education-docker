import { useRouter } from 'next/router';

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true
    };
  }

  console.log(`Generating page for /posts/${params.postID}`);

  return {
    props: {
      post: data
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postID: '1' }
      },
      {
        params: { postID: '2' }
      },
      {
        params: { postID: '3' }
      }
    ],
    fallback: true
  };
}

export default Post;
