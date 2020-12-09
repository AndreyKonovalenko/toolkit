import React from 'react';
import {ThemeProvider} from 'react-jss';

const theme = {
  colorPrimary: '#e38c4c',
  colorSecondary: '#f6c561',
  colorTertiary: 'fcf1da',
  colorQuaternary: '#977B60',
};

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <div>{props.children}</div>
    </ThemeProvider>
  );
};

export default Layout;
