import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_API_ENDPOINT', // Replace with your GraphQL API (e.g., https://api.example.com/graphql)
  cache: new InMemoryCache(), // Cache for storing query results
});

export default client;