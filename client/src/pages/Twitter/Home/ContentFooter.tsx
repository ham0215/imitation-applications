import React, { useState, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import { FaRegComment, FaHeart, FaRetweet } from 'react-icons/fa';
import { FiHeart, FiShare } from 'react-icons/fi';
import styled from 'styled-components/macro';

const Footer = styled.footer`
  font-size: 20px;
  color: gray;
  width: 100%;
  text-align: center;
  margin: 10px 0 10px 0;
`;

const AlignGrid = styled(Grid)<{ align: string }>`
  text-align: ${({ align }) => align};
`;

export default () => {
  const [heartCount, setHeartCount] = useState(0);
  const [doHeart, setDoHeart] = useState(false);

  const heartToggle = useCallback(() => {
    if (doHeart) {
      setHeartCount(heartCount - 1);
      setDoHeart(false);
    } else {
      setHeartCount(heartCount + 1);
      setDoHeart(true);
    }
  }, [heartCount, doHeart]);

  let heartIcon;
  if (doHeart) {
    heartIcon = <FaHeart onClick={heartToggle} color="red" />;
  } else {
    heartIcon = <FiHeart onClick={heartToggle} />;
  }

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
            <Grid container wrap="nowrap" spacing={2}>
              <AlignGrid item xs={6} align="right">
                {heartIcon}
              </AlignGrid>
              <AlignGrid item xs={6} align="left">
                {heartCount > 0 && heartCount}
              </AlignGrid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <FiShare />
          </Grid>
        </Grid>
      </Grid>
    </Footer>
  );
};
