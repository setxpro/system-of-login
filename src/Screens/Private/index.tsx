import React from 'react';
import Header from '../../Components/Header';
import { useAuth } from '../../Hooks/useAuth';

import * as C from './styles';

const Private: React.FC = () => {

  const auth = useAuth();

  const handleLogout = async() => {
      const data = await auth.signOut();
      return data;
  }

  return (
      <C.Container>
          <Header handleLogout={handleLogout}/>
          <C.Content>
            <h1>PRIVATE PAGE</h1>
          </C.Content>
      </C.Container>
  );
}

export default Private;