import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../Contexts/RequireAuth';
import Login from '../Screens/Login';
import Private from '../Screens/Private';

const RoutesGet: React.FC = () => {
  return (
      <Routes>
          <Route path="*" element={<Login/>}/>
          <Route path="/user" element={<RequireAuth><Private/></RequireAuth>}/>
      </Routes>
  );
}

export default RoutesGet;