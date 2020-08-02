import React from 'react';
import RootRouter from 'pages';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import theme from './styles/theme';

const client = new ApolloClient({
  uri: 'https://imitation-applications-cq5u3jmb7q-an.a.run.app/graphql',
  cache: new InMemoryCache(),
});

export default () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <RootRouter />
    </ApolloProvider>
  </ThemeProvider>
);
