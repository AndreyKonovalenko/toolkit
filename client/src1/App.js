import React from 'react';
import TextSorter from './pages/TextSorter';
import FsspParser from './pages/FsspParser';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
  const routes = (
    <Switch>
      <Route path='/' exact component={TextSorter} />
      <Route path='/textsorter' exact component={TextSorter} />
      <Route path='/fsspparser' exact component={FsspParser} />
    </Switch>
  );
  return (
    <BrowserRouter>
      <Layout>{routes}</Layout>
    </BrowserRouter>
  );
};

export default App;
