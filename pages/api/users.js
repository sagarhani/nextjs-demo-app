export default async function handler(_, res) {
  // Fetch data from source
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  res.status(200).json(users);
}
