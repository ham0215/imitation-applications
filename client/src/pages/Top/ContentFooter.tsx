import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { FiHeart, FiShare } from 'react-icons/fi';
import styled from 'styled-components/macro';

const Footer = styled.footer`
  font-size: 20px;
  color: gray;
  width: 100%;
  text-align: center;
  margin: 10px 0 10px 0;
`;

export default () => {
  return (
    <Footer>
      <Grid item container>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs={3}>
            <FaRegComment />
          </Grid>
          <Grid item xs={3}>
            <FaRetweet />
          </Grid>
          <Grid item xs={3}>
            <FiHeart />
          </Grid>
          <Grid item xs={3}>
            <FiShare />
          </Grid>
        </Grid>
      </Grid>
    </Footer>
  );
};
