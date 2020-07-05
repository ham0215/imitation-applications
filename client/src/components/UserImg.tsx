import React from 'react';
import styled from 'styled-components/macro';

const UserImg = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

type UserImg = {
  src: string;
  alt: string;
};

export default (props: UserImg) => {
  const { src, alt } = props;
  return <UserImg src={src} alt={alt} />;
};
