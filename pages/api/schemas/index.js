import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }

  type Geo {
    lat: Float
    lng: Float
  }

  type User {
    id: Int
    name: String
    username: String
    email: String
    address: Address
    phone: String
    website: String
    company: Company
  }

  type Company {
    name: String
    catchPhrase: String
    bs: String
  }

  type Query {
    getUsers: [User]
  }
`;
