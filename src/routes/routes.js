import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoreList from '../components/StoreList';
import StoreDetail from '../components/StoreDetail';
import StoreForm from '../components/StoreForm';
import NotFound from '../components/NotFound';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StoreList} />
        <Route exact path="/stores/:id" component={StoreDetail} />
        <Route exact path="/stores/:id/edit" component={StoreForm} />
        <Route exact path="/create" component={StoreForm} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
