import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';
import Footer from './Footer';

const Container = styled.div`
  background-color: #15202b;
`;

const Main = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
`;

const Home = lazy(() => import(/* webpackChunkName: 'home' */ './Home'));
const Detail = lazy(() => import(/* webpackChunkName: 'detail' */ './Detail'));

export default () => (
  <Container>
    <Main>
      <Switch>
        <Route path="/:userId/detail/:tweetId" exact component={Detail} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </Main>
  </Container>
);
