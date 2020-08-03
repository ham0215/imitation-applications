import React from 'react';
import styled from 'styled-components/macro';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Link from 'components/BlockLink';

const Header = styled.header`
  display: block;
  border-bottom: solid 1px;
  border-color: rgb(61, 84, 102);
  z-index: 99;
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  text-align: center;
  padding: 0 auto;
  background-color: #15202b;
  height: 60px;
`;

const HeaderMenu = styled.div`
  display: flex;
  height: inherit;
`;

const BackLink = styled(Link)`
  margin: auto 10px auto 10px;
  color: rgba(29, 161, 242, 1);
  font-size: 20px;
`;

const Title = styled.h2`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  color: white;
`;

export default () => (
  <Header>
    <HeaderMenu>
      <BackLink to="/">
        <AiOutlineArrowLeft />
      </BackLink>
      <Title>ツイートする</Title>
    </HeaderMenu>
  </Header>
);
