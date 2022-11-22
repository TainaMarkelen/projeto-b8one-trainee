import React from 'react';
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql";
import { HomePage, LoginPage } from "./pages";

import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <LoginPage />
    </ApolloProvider>  
  );
}

export default App;
