import User from '../components/user';

const UserList = ({ users }) => {
  return (
    <>
      <h1>List of Users</h1>
      <div
        style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(3, 1fr)'
        }}
      >
        {users.map((user) => (
          <div key={user.id} style={{ border: '1px solid black' }}>
            <User user={user} />
          </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      users: data
    }
  };
}

export default UserList;
