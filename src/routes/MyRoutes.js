import React from 'react';
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';
import StoreList from '../components/StoreList';
import StoreDetail from '../components/StoreDetail';
import StoreForm from '../components/StoreForm';
import NotFound from '../components/NotFound';

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StoreList/>} />
        <Route exact path="/stores/:id" element={<StoreDetail/>} />
        <Route exact path="/stores/:id/edit" element={<StoreForm/>} />
        <Route exact path="/create" element={<StoreForm/>} />
        <Route exact path="/test" element={<StoreForm/>} />

        <Route component={NotFound} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
