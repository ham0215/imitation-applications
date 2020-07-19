import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Contents from 'components/Contents';
import Tweets from 'pages/Twitter/Data/tweets.json';
import Header from './Header';
import Content from './Content';

export default ({ match }: RouteComponentProps<{ userId: string; tweetId: string }>) => {
  const tweet = Tweets.find((item) => {
    if (item.tweetId.toString() === match.params.tweetId && item.userId.slice(1) === match.params.userId) return true;
    return false;
  });

  let content;
  if (tweet) {
    content = (
      <Content
        name={tweet.name}
        userId={tweet.userId}
        tweetId={tweet.tweetId}
        tweetTime={tweet.tweetTime}
        avatarAlt={tweet.avatarAlt}
        avatarImg={tweet.avatarImg}
        text={tweet.text}
        img={tweet.img}
        imgAlt={tweet.imgAlt}
      />
    );
  } else {
    content = <div>ツイートが見つかりません</div>;
  }

  return (
    <div>
      <Header />
      <Contents>{content}</Contents>
    </div>
  );
};
