import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { AiTwotoneHome, AiOutlineMail } from 'react-icons/ai';
import { FiSearch, FiBell } from 'react-icons/fi';
import styled from 'styled-components/macro';

const Footer = styled.footer`
  width: 100%;
`;

const useStyles = makeStyles({
  root: {
    backgroundColor: '#15202B',
    borderTop: 'solid 1px',
    borderColor: 'rgb(61, 84, 102)',
    width: '100%',
    position: 'fixed',
    left: '0px',
    bottom: '0px',
    zIndex: 99,
    textAlign: 'center',
    display: 'block',
  },
  default: {
    color: 'white',
    fontSize: '30px',

    '&$selected': {
      color: '#1da1f2',
    },
  },
  selected: {},
});

export default () => {
  const classes = useStyles();
  const [value, setValue] = useState('home');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Footer>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          value="home"
          icon={<AiTwotoneHome />}
          classes={{ root: classes.default, selected: classes.selected }}
        />
        <BottomNavigationAction
          value="search"
          icon={<FiSearch />}
          classes={{ root: classes.default, selected: classes.selected }}
        />
        <BottomNavigationAction
          value="bell"
          icon={<FiBell />}
          classes={{ root: classes.default, selected: classes.selected }}
        />
        <BottomNavigationAction
          value="mail"
          icon={<AiOutlineMail />}
          classes={{ root: classes.default, selected: classes.selected }}
        />
      </BottomNavigation>
    </Footer>
  );
};
