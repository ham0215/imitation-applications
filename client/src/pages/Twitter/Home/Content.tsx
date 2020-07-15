import React from 'react';
import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ContentFooter from './ContentFooter';
import ContentHeader from './ContentHeader';

const Content = styled.div`
  border-left: solid 1px;
  border-right: solid 1px;
  border-bottom: solid 1px;
  border-color: rgb(61, 84, 102);
  flex-grow: 1;
  padding: 0 10px 0 10px;
`;

const ContentImg = styled.img`
  border-radius: 20px;
`;

type Tweet = {
  name: string;
  id: string;
  tweetTime: string;
  avatarImg: string;
  avatarAlt: string;
  text: string;
  img: string;
  imgAlt: string;
};

const Discription = styled(Grid)`
  white-space: pre-wrap;
`;

export default (props: Tweet) => {
  const { name, id, tweetTime, avatarImg, avatarAlt, text, img, imgAlt } = props;

  return (
    <Content>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar src={avatarImg} alt={avatarAlt} />
        </Grid>
        <Grid item container>
          <ContentHeader name={name} id={id} tweetTime={tweetTime} />
          <Discription item container>
            {text}
          </Discription>
          <Grid item container>
            <ContentImg src={img} alt={imgAlt} width="100%" />
          </Grid>
          <ContentFooter />
        </Grid>
      </Grid>
    </Content>
  );
};
