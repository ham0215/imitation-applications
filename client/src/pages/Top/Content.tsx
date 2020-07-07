import React from 'react';
import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Content = styled.div`
  border-bottom: solid 1px;
  border-color: rgb(61, 84, 102);
  flex-grow: 1;
  padding: 0 10px 0 10px;
`;

const GrayTypography = styled(Typography)`
  color: gray;
`;

export default () => {
  return (
    <Content>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar src="/images/blue-bird.png" alt="青い鳥" />
        </Grid>
        <Grid item container>
          <Grid item xs={4} zeroMinWidth>
            <Typography noWrap>hogehogehogehoge</Typography>
          </Grid>
          <Grid item xs={4} zeroMinWidth>
            <GrayTypography noWrap>@hogehoge</GrayTypography>
          </Grid>
          <Grid item xs={4}>
            <GrayTypography>1時間前</GrayTypography>
          </Grid>
        </Grid>
      </Grid>
    </Content>
  );
};
