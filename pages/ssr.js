export default function SeverSideRendering({ users }) {
  return (
    <div>
      <h3>
        <u>Users List</u>
      </h3>
      <ul>
        {users.map(user => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  // Pass data to the page via props
  return {
    props: {
      users
    }
  };
}
