import React from 'react';
import Header from '../../Components/Header';
import { useAuth } from '../../Hooks/useAuth';

import * as C from './styles';

const Private: React.FC = () => {

  const auth = useAuth();

  const handleLogout = () => {
      const userToNull = auth.signOut();
      return userToNull;
  }

  return (
      <C.Container>
          <Header handleLogout={handleLogout}/>
          <C.Content>
            <h1>PRIVATE PAGE</h1>
            <table>
              
            </table>
          </C.Content>
      </C.Container>
  );
}

export default Private;