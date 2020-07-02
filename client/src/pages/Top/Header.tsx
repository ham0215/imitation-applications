import React from 'react';
import styled from 'styled-components/macro';
import { GiStarShuriken } from 'react-icons/gi';

const Header = styled.header`
  background-color: #282c34;
  width: 100%;
  height: 70px;
  display: flex;
`;

const UserImg = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-left: 10px;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  display: block;
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
      <div>
        <UserImg src="/images/blue-bird.png" alt="青い鳥" />
      </div>
      <Title>Home</Title>
      <Star>
        <GiStarShuriken />
      </Star>
    </Header>
  );
};
