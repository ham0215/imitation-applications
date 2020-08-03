import React from 'react';
import Contents from 'components/Contents';
// import Tweets from 'pages/Twitter/Data/tweets.json';
import { useTweetsQuery } from 'generated/graphql';
import CircularProgress from '@material-ui/core/CircularProgress';
import Content from './Content';
import Header from './Header';

export default () => {
  /*
  const contents = Tweets.map(({ name, userId, tweetId, tweetTime, avatarImg, avatarAlt, text, img, imgAlt }) => (
    <Content
      key={tweetId}
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
  ));
  */

  const { data, loading, error } = useTweetsQuery({
    variables: {},
  });

  let body;
  if (loading) {
    body = <CircularProgress />;
  } else if (data) {
    if (!data.tweets.nodes) {
      body = <div>えらー</div>;
    } else {
      const contents = data.tweets.nodes?.map((node) => {
        if (!node) return;
        const { name, userId, tweetId, tweetTime, avatarImg, avatarAlt, text, img, imgAlt } = node;

        return (
          <Content
            key={tweetId}
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
      body = <Contents>{contents}</Contents>;
    }
  } else if (error) {
    body = <div>えらー</div>;
  }

  return (
    <div>
      <Header />
      {body}
    </div>
  );
};
