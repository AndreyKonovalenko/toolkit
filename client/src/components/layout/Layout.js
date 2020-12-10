import React from 'react';
import { ThemeProvider, createUseStyles } from 'react-jss';

const theme = {
  // color scheme
  colorPrimary: '#e38c4c',
  colorSecondary: '#f6c561',
  colorTertiary: 'fcf1da',
  colorQuaternary: '#977B60',
  // grid structure

};

let useStyles = createUseStyles(() => ({
  wrapper: {
    maxWidth: 1000,
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    gridTemplateRows: 'auto'
  },
  header: {
    gridColumn: "1/3",
    gridRow: "1/2"
  },

  aside: {
    gridColumn: "1/2",
    gridRow: "2/3"
  },

  main: {
    gridColumn: "2/3",
    gridRow: "2/3"
  },
  footer: {
    gridColumn: "1/3",
    gridRow: "3/4",
  }

}))

const Layout = (props) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <h1>Place for navigation BAR</h1>
        </div>
        <div className={classes.aside}> Place for component</div>
        <div className={classes.main}>{props.children}</div>
        <div className={classes.footer}>
          <h3>Place for footer component</h3>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
