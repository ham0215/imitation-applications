import React from 'react';
import styled from 'styled-components/macro';
import Content from './Content';
import Tweets from './Data/tweets.json';

const Contents = styled.section`
  color: white;
  margin-top: 60px;
  margin-bottom: 56px;
`;

export default () => {
  console.log(Tweets);

  const contents = Tweets.map((tweet) => {
    const { avatarImg, avatarAlt, text, img, imgAlt } = tweet;

    return (
      <Content
        avatarAlt={avatarAlt}
        avatarImg={avatarImg}
        text={text}
        img={img}
        imgAlt={imgAlt}
      />
    );
  });

  return <Contents>{contents}</Contents>;
};
