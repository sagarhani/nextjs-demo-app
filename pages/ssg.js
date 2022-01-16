export default function StaticSiteGen({ users }) {
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

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get data
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  // By returning { props: { users } }, the StaticSiteGen component
  // will receive `users` as a prop at build time
  return {
    props: {
      users
    }
  };
}
