import React from 'react';
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';
import styled from 'styled-components/macro';

const Container = styled.div`
  background-color: #15202b;
`;

const Main = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export default () => {
  return (
    <Container>
      <Main>
        <Header />
        <Contents />
        <Footer />
      </Main>
    </Container>
  );
};
