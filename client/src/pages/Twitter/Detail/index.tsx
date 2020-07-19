import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from './Header';

export default ({ match }: RouteComponentProps<{ userId: string; tweetId: string }>) => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {match.params.userId}
      {match.params.tweetId}
    </div>
  );
};
