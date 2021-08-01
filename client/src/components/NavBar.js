import React from 'react';
import {NavLink} from 'react-router-dom';
import {createUseStyles, useTheme} from 'react-jss';

let useStyles = createUseStyles((theme) => ({
  container: {background: theme.colorTertiary},
  ul: {
    listStyleType: 'none',
    margin: 0,
    overflow: 'hidden',
    border: '1px, solid, #e7e7e7',
    backgroundColor: '#f3f3f3',
  },
  li: {
    float: 'left',
  },
  navlink: {
    display: 'block',
    color: '#666',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
  },
}));

const NavBar = (props) => {
  const theme = useTheme();
  const classes = useStyles({...props, theme});

  const textSorter = (
    <li className={classes.li}>
      <NavLink
        className={classes.navlink}
        to={'/textsorter'}
        activeStyle={{
          color: 'white',
          backgroundColor: '#04AA6d',
        }}
      >
        TextSorter
      </NavLink>
    </li>
  );
  const fsspParser = (
    <li className={classes.li}>
      <NavLink
        className={classes.navlink}
        to={'/fsspparser'}
        activeStyle={{
          color: 'white',
          backgroundColor: '#04AA6d',
        }}
      >
        Fssp Paraser
      </NavLink>
    </li>
  );

  return (
    <div>
      <ul className={classes.ul}>
        {textSorter}
        {fsspParser}
      </ul>
    </div>
  );
};

export default NavBar;
