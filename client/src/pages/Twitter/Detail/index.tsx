import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default ({ match }: RouteComponentProps<{ userId: string; tweetId: string }>) => {
  return (
    <div>
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
