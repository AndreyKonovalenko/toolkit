import React from 'react';
import { NavLink } from 'react-router-dom';
import { createUseStyles, useTheme } from 'react-jss';

let useStyles = createUseStyles((theme) => ({
  container: { background: theme.colorTertiary },
  footer: {
    border: '1px, solid, #e7e7e7',
    backgroundColor: '#f3f3f3',
    textAlign: 'center',
    padding: '10px',
    color: '#666',
  },
  small: {
    fontWeight: 400
  }
}));

const NavBar = (props) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });


  return (
    <div className={classes.footer}>
      <small className={classes.small}>Created by Andrew</small>
    </div>
  );
};

export default NavBar;
