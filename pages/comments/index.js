import { useState } from 'react';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();

    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    console.log(data);
  };

  const deleteComment = async (commentID) => {
    const response = await fetch(`/api/comments/${commentID}`, {
      method: 'DELETE'
    });
    const data = await response.json();

    console.log(data);
    fetchComments();
  };

  return (
    <>
      <h1>Comments Page</h1>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map(({ id, text }) => (
        <div key={id}>
          {id} {text}
          <button onClick={() => deleteComment(id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default CommentsPage;
