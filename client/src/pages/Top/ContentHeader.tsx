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

export default () => {
  return (
    <Header>
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
    </Header>
  );
};