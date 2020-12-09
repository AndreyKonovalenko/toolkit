import React from 'react';
import Main from './containers/Main';
import Layout from './components/layout/Layout';

const App = () => {
  const routs = <Main />;
  return <Layout>{routs}</Layout>;
};

export default App;
