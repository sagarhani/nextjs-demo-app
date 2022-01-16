export const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        return users;
      } catch (error) {
        throw error;
      }
    }
  }
};
