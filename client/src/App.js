import React from 'react';
import TextSorter from './pages/TextSorter';
import Layout from './components/Layout';

const App = () => {
  const routs = <TextSorter />;
  return <Layout>{routs}</Layout>;
};

export default App;
