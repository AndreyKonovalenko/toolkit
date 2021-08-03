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
}));

const NavBar = (props) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });


  return (
    <div className={classes.footer}>
      <h5>Created by Andrew</h5>
    </div>
  );
};

export default NavBar;
