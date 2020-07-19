import React from 'react';
import Contents from 'components/Contents';
import Tweets from 'pages/Twitter/Data/tweets.json';
import Content from './Content';
import Header from './Header';

export default () => {
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
