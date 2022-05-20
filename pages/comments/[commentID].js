import { comments } from '../../data/comments';

const Comment = ({ comment: { id, text } }) => {
  return (
    <>
      <p>
        {id} {text}
      </p>
    </>
  );
};

export async function getStaticProps(context) {
  const {
    params: { commentID }
  } = context;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentID)
  );

  return {
    props: {
      comment
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { commentID: '1' }
      },
      {
        params: { commentID: '2' }
      },
      {
        params: { commentID: '3' }
      }
    ],
    fallback: false
  };
}

export default Comment;
