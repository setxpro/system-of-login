import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../Contexts/RequireAuth';
import Login from '../Screens/Login';
import Private from '../Screens/Private';
import UpdatePassword from '../Screens/Update';

const RoutesGet: React.FC = () => {
  return (
      <Routes>
          <Route path="*" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/user" element={<RequireAuth><Private/></RequireAuth>}/>
          <Route path="/update-password" element={<RequireAuth><UpdatePassword/></RequireAuth>}/>
      </Routes>
  );
}

export default RoutesGet;