import React from 'react';
import styled from 'styled-components/macro';
import Content from './Content';
import Tweets from 'pages/Twitter/Data/tweets.json';
import Header from './Header';

const Contents = styled.section`
  color: white;
  margin-top: 60px;
  margin-bottom: 56px;
`;

export default () => {
  console.log(Tweets);

  const contents = Tweets.map(({ name, userId, tweetId, tweetTime, avatarImg, avatarAlt, text, img, imgAlt }) => {
    return (
      <Content
        name={name}
        userId={userId}
        tweetId={tweetId}
        tweetTime={tweetTime}
        avatarAlt={avatarAlt}
        avatarImg={avatarImg}
        text={text}
        img={img}
        imgAlt={imgAlt}
      />
    );
  });

  return (
    <div>
      <Header />
      <Contents>{contents}</Contents>
    </div>
  );
};
