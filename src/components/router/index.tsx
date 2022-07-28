import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from '../pages/Welcome';

const AppRoutes: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/?step=1" element={<Welcome />}></Route>
    </Routes>
  );
};

export default AppRoutes;
