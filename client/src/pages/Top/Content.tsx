import React from 'react';
import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ContentFooter from './ContentFooter';
import ContentHeader from './ContentHeader';

const Content = styled.div`
  border-bottom: solid 1px;
  border-color: rgb(61, 84, 102);
  flex-grow: 1;
  padding: 0 10px 0 10px;
`;

export default () => {
  return (
    <Content>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar src="/images/blue-bird.png" alt="青い鳥" />
        </Grid>
        <Grid item container>
          <ContentHeader />
          <Grid item container>
            槍が岳に行ってきました
            <br />
            最高だぜ！！！
            <br />
          </Grid>
          <Grid item container>
            <img
              src="https://www.hamchance.com/images/yarigadake.jpg"
              alt="槍ヶ岳"
              width="100%"
            />
          </Grid>
          <ContentFooter />
        </Grid>
      </Grid>
    </Content>
  );
};
