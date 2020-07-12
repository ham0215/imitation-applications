import React from 'react';
import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const GrayTypography = styled(Typography)`
  color: gray;
`;

const Header = styled.header`
  width: 100%;
  margin-top: 10px;
`;

type TweetUser = {
  name: string;
  id: string;
  tweetTime: string;
};

export default (props: TweetUser) => {
  const { name, id, tweetTime } = props;

  return (
    <Header>
      <Grid item container>
        <Grid item xs={4} zeroMinWidth>
          <Typography noWrap>{name}</Typography>
        </Grid>
        <Grid item xs={4} zeroMinWidth>
          <GrayTypography noWrap>{id}</GrayTypography>
        </Grid>
        <Grid item xs={4}>
          <GrayTypography>{tweetTime}</GrayTypography>
        </Grid>
      </Grid>
    </Header>
  );
};
