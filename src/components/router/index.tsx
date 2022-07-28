import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../screens/Landing';

const AppRoutes: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/?step=1" element={<Landing />}></Route>
    </Routes>
  );
};

export default AppRoutes;
