import React from 'react';
import styled from 'styled-components/macro';
import { GiStarShuriken } from 'react-icons/gi';
import UserImg from 'components/UserImg';

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
`;

const HeaderMenu = styled.div`
  display: flex;
`;

const ImgDiv = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Title = styled.h2`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  color: white;
`;

const Star = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: 10px;
  color: #1da1f2;
  font-size: 30px;
`;

export default () => {
  return (
    <Header>
      <HeaderMenu>
        <ImgDiv>
          <UserImg src="/images/blue-bird.png" alt="青い鳥" />
        </ImgDiv>
        <Title>Home</Title>
        <Star>
          <GiStarShuriken />
        </Star>
      </HeaderMenu>
    </Header>
  );
};
